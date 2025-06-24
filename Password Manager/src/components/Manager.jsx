import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Manager = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [mainpassword, setmainPassword] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [savedPasswords, setSavedPasswords] = useState([]);
  const API_BASE = import.meta.env.VITE_API_URL;

  const fetchPasswords = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/passwords`);
      const data = await res.json();
      console.log("Fetched data:", data);

      if (Array.isArray(data)) {
        setSavedPasswords(data.map(p => ({ ...p, show: false })));
      } else if (Array.isArray(data.passwords)) {
        setSavedPasswords(data.passwords.map(p => ({ ...p, show: false })));
      } else {
        console.error("Unexpected data format:", data);
        setSavedPasswords([]);
      }
    } catch (error) {
      console.error("Failed to fetch passwords:", error);
    }
  };

  useEffect(() => {
    fetchPasswords();
  }, []);

  const savePassword = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/passwords", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, username, password: mainpassword })
      });

      const data = await res.json();
      console.log("Saved password:", data);

      if (data && data.url && data.username) {
        setSavedPasswords(prev => [...prev, { ...data, show: false }]);
      }

      setPassword("non-empty-to-render-section");
      setOpen(false);
      setUrl("");
      setUsername("");
      setmainPassword("");
      toast("Password Saved");
    } catch (error) {
      console.error("Failed to save password:", error);
    }
  };

  const deletepassword = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/passwords/${id}`, {
        method: "DELETE"
      });

      setSavedPasswords(prev => prev.filter(p => p._id !== id));
      toast("Password Deleted");
      console.log("Deleting password with id:", id);
    } catch (error) {
      console.error("Failed to delete password:", error);
      toast.error("Failed to delete");
    }
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-6'>
        <div className='mt-3 text-[44px] text-white z-10 font-bold text-center'>
          <div>Your vault of</div>
          <div>digital secrets</div>
        </div>
        <button
          className='add bg-blue-600 hover:scale-105 transition-scale duration-200 text-white px-6 py-2 rounded hover:bg-blue-700 transition'
          onClick={() => setOpen(!open)}
        >
          <span className="text">{open ? "Close Form" : "Add Password"}</span>
        </button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        theme="dark"
      />

      {open && (
        <div className='mt-6 flex justify-center'>
          <div className='w-[80vw] max-w-2xl p-6 bg-[#122852] text-white rounded-xl shadow-lg transition-all duration-300'>
            <h2 className='text-xl font-bold mb-6 text-center'>Add New Password</h2>
            <div className='flex flex-col gap-4'>
              <input
                type='url'
                placeholder='Enter Website URL'
                className='w-full p-3 rounded bg-[#0c1632] border border-[#1f2e50] focus:outline-none focus:ring-2 focus:ring-blue-400'
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                required
              />
              <input
                type='text'
                placeholder='Enter Username'
                className='w-full p-3 rounded bg-[#0c1632] border border-[#1f2e50] focus:outline-none focus:ring-2 focus:ring-blue-400'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type='password'
                placeholder='Enter Password'
                onChange={(e) => setmainPassword(e.target.value)}
                className='w-full p-3 rounded bg-[#0c1632] border border-[#1f2e50] focus:outline-none focus:ring-2 focus:ring-blue-400'
                value={mainpassword}
                required
              />
              <button
                className='bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition w-full mt-2'
                onClick={savePassword}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 flex justify-center items-center">
        <div className='rounded-xl border-2 border-[#102e51] w-[90vw] h-[55vh]'>
          <div className="w-[30vw] flex m-4 gap-1 items-center border border-[#102e51] rounded-xl">
            <div className='p-2'>
              <img className='w-6' src="https://img.icons8.com/?size=100&id=132&format=png&color=6c799a" alt="search" />
            </div>
            <input
              className='focus:outline-none text-white w-full text-[18px] font-semibold bg-transparent'
              type="text"
              name="search"
              id="search"
              placeholder='Search'
            />
          </div>

          {savedPasswords.length === 0 ? (
            <div className='text-center font-black text-white text-3xl mt-20'>No Passwords Created</div>
          ) : (
            <div className='rounded-md text-white w-[80vw] h-[43vh] m-4 border border-[#0b1932] overflow-y-auto'>
              <div className='m-4'>
                <div className='flex justify-between border-b  mb-3 border-[#1e2e4e] py-2 items-center'>
                  <div className='w-[30%] text-center text-[23px] font-bold'>Website</div>
                  <div className='w-[30%] text-center text-[23px] font-bold'>Username</div>
                  <div className='w-[30%] text-center text-[23px] font-bold'>Passwords</div>
                </div>

                {savedPasswords.map((item) => (
                  <div key={item._id} className='flex justify-between border-b border-[#1e2e4e] py-2 items-center'>
                    <div className='w-[30%] text-center text-[15px] font-semibold'>{item.url}</div>
                    <div className='w-[30%] text-center text-[15px] font-semibold'>{item.username}</div>
                    <div className='w-[30%] text-center text-[15px] flex justify-between items-center gap-2'>
                      <span>
                        {item.show ? item.password : '•'.repeat(item.password.length)}
                      </span>
                      <div className='flex gap-4'>
                        <button
                          onClick={() => {
                            setSavedPasswords(prev =>
                              prev.map((p) =>
                                p._id === item._id ? { ...p, show: !p.show } : p
                              )
                            );
                          }}
                          title={item.show ? "Hide" : "Show"}
                          className='border-black border rounded-xl hover:scale-110 transition-transform'
                        >
                          <img
                            src={
                              item.show
                                ? "https://img.icons8.com/?size=100&id=85137&format=png&color=000000"
                                : "https://img.icons8.com/?size=100&id=85130&format=png&color=000000"
                            }
                            alt="toggle visibility"
                            className='w-5 h-5 m-[9px]'
                          />
                        </button>

                        <button className="bin-button" onClick={() => deletepassword(item._id)}>
                          <svg className="bin-top" viewBox="0 0 39 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="5" x2="39" y2="5" stroke="white" strokeWidth="4" />
                            <line x1="12" y1="1.5" x2="26.0357" y2="1.5" stroke="white" strokeWidth="3" />
                          </svg>
                          <svg className="bin-bottom" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_8_19" fill="white">
                              <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z" />
                            </mask>
                            <path
                              d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                              fill="white"
                              mask="url(#path-1-inside-1_8_19)"
                            />
                            <path d="M12 6L12 29" stroke="white" strokeWidth="4" />
                            <path d="M21 6V29" stroke="white" strokeWidth="4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;

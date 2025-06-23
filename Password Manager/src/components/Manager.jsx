import React, { useState } from 'react'

const Manager = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [mainpassword, setmainPassword] = useState("");
  const [password, setPassword] = useState("")
  const [open, setOpen] = useState(false)

  const cLog =()=> {
  console.log(url,username,mainpassword)
  }
  return (
    <>
      {/* Header and Button */}
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

      {/* Password Form (Toggled) */}
      {open && (
        <div className='mt-6 flex justify-center'>
          <div className='w-[80vw] max-w-2xl p-6 bg-[#122852] text-white rounded-xl shadow-lg transition-all duration-300'>
            <h2 className='text-xl font-bold mb-6 text-center'>Add New Password</h2>
            <div className='flex flex-col gap-4'>

              <input
                type='url'
                placeholder='Enter Website URL'
                className='w-full p-3 rounded bg-[#0c1632] border border-[#1f2e50] focus:outline-none focus:ring-2 focus:ring-blue-400' onChange={(e) => setUrl(e.target.value)} value={url}
              />

              <input
                type='text'
                placeholder='Enter Username'
                className='w-full p-3 rounded bg-[#0c1632] border border-[#1f2e50] focus:outline-none focus:ring-2 focus:ring-blue-400' value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type='password'
                placeholder='Enter Password'
                onChange={(e) => setmainPassword(e.target.value)}
                className='w-full p-3 rounded bg-[#0c1632] border border-[#1f2e50] focus:outline-none focus:ring-2 focus:ring-blue-400' value={mainpassword}
              />

              <button
                className='bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition w-full mt-2'
                onClick={() => {
                  // TODO: Add your save logic here
                  setOpen(false)
                  cLog()
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search & Password Display */}
      <div className="mt-10 flex justify-center items-center">
        <div className='rounded-xl border-2 border-[#102e51] w-[90vw] h-[55vh]'>

          {/* Search bar */}
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

          {/* Passwords */}
          {password === "" ? (
            <div className='text-center font-black text-white text-3xl mt-20'>No Passwords Created</div>
          ) : (
            <div className='rounded-md text-white w-[80vw] h-[43vh] m-4 border border-[#0b1932]'>
              <div className='m-4 flex justify-center items-center'>
                {/* Columns */}
                {["Website", "Username", "Password"].map((label, i) => (
                  <div key={i} className='flex flex-col items-center w-[23vw]'>
                    <div className='mb-1 font-bold text-center'>{label}</div>
                    <div className='mb-2 w-full border border-white' />
                    <div className='text-center'>—</div>
                    <div className='mt-2 w-full border border-white' />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>

  )
}

export default Manager

"use client"
import React from 'react'
import Navbar from '@/components/navbar'
import { useState } from 'react'
import { useUser } from "@clerk/nextjs";

const Page = () => {
  const [name, setName] = useState("");
  const { user, isLoaded } = useUser();
  const [url, setUrl] = useState("");

  const handleSubmit = async () => {
    if (!name || !url) {
      alert("Please fill in both fields");
      return;
    }

    if (!isLoaded || !user) {
      alert("User not logged in");
      return;
    }

    try {
      const userId = user.id; // ✅ Clerk user ID

      const res = await fetch("/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, url, userId }),
      });

      const data = await res.json();
      console.log("Saved:", data);

      setName("");
      setUrl("");
    } catch (error) {
      console.error("Error saving link:", error);
    }
  };

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="w-screen h-screen flex gap-10 justify-center items-center">
        <section className="bg-[#1c1a1e] mt-13 w-[40%] h-[80%] rounded-lg items-center flex flex-col justify-evenly">
          <h2 className="text-5xl font-semibold ">
            Add New&nbsp;
            <span className='text-[#794be2]'>
              Links
            </span>
          </h2>
          <div className="flex flex-col gap-10">
            <div className="relative">
              <input
                type="text"
                value={name}
                id="email"
                className="text-white floating-input w-80 px-4 py-3 border-2 border-gray-500 rounded-lg placeholder-transparent"
                placeholder="Website Name"
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="email"
                className="floating-label absolute left-4 top-3 text-gray-500 cursor-text"
              >
                Website Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="email"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="text-white floating-input w-80 px-4 py-3 border-2 border-gray-500 rounded-lg placeholder-transparent"
                placeholder="Url"
              />
              <label
                htmlFor="email"
                className="floating-label absolute left-4 top-3 text-gray-500 cursor-text"
              >
                Url
              </label>
            </div>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="p-3 px-10 cursor-pointer rounded-xl bg-[#794be2]"
            >Add</button>
          </div>
        </section>
        <section className="bg-[#1c1a1e] mt-13 w-[40%] h-[80%] rounded-lg items-center flex flex-col justify-evenly">
          <h2 className="text-5xl font-semibold ">
            <span className='text-[#794be2]'>
              Your&nbsp;
            </span>
            Links
          </h2>
        </section>
      </main>

    </>
  )
}

export default Page

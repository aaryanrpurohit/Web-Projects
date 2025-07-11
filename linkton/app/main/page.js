"use client"
import { GridBackground } from '@/components/GridBackground'
import React from 'react'
import { useState, useRef } from 'react'
import { Orbitron } from 'next/font/google'
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

const Page = () => {
  const [short_name, setshort_name] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [url, seturl] = useState("")
  const urlRef = useRef()
  const shortRef = useRef()

  const handleChange = () => {
    const Url = urlRef.current.value;
    const short = shortRef.current.value;
    seturl(Url)

    urlRef.current.value = "";
    shortRef.current.value = "";
  };
  return (
    <>
      <main className={`min-w-screen min-h-screen  flex flex-col justify-center items-center ${orbitron.className} gap-1`}>
        <div className='flex justify-center items-center gap-5'>
          <div className='flex justify-center items-center gap-3'>
          <div className="input-group">
            <input type="text" name="user" ref={urlRef} required className="input"/>
            <label className="user-label">Url</label>
          </div>
          <div className="input-group">
            <input type="text" name="user" ref={shortRef} required className="input"/>
            <label className="user-label">Short-Name</label>
          </div>
          </div>
          <div className=''>
            <button className="btn" onClick={handleChange}>SHORTEN IT</button>
          </div>
        </div>
        <div>
          <input type="text" name="short" id="short" value={url} className='outline-none w-[20vw]' readOnly/>
        </div>
      </main>
    </>
  )
}

export default Page


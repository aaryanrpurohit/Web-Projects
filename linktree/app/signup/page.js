import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen flex flex-col gap-10 justify-center items-center'>
        <Link href="/">
        <button className='p-10 bg-gray-400'>
          --BACK--
        </button>
        </Link>
      <p>
        In Processing
      GO BACK
        </p>
    </div>

  )
}

export default page

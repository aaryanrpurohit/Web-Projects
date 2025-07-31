import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#222222] rounded-b-3xl px-4 py-12 mx-11 md:px-20  content-center flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <Image
          className="absolute w-48 md:w-72 top-[60%] md:top-[35%] right-[-10%] md:right-[-2%] pointer-events-none"
          src="/Linktree.png"
          alt="Image 1"
          width={300}
          height={300}
        />

        {/* Text Content */}
        <div className="z-10 max-w-xl">
          <h2 className="text-xl md:text-5xl font-bold leading-tight flex flex-col">
            <span> Your Personalized Link</span>
            <span>
              <span className="text-[#741fd9]">Page</span>
              <span> for Everything</span>
            </span>
          </h2>
          <p className="mt-4 text-xs md:text-lg">
            Share all your content, links, and profiles from one beautifully <br className="hidden md:block" />
            designed bio page.
          </p>
          <button className='hover:scale-105 duration-100 p-3.5 px-10 mt-6 cursor-pointer bg-[#662bc4] rounded-xl'>
            Get Started
          </button>
        </div>
      </section>

      <section className='mx-12 mt-20'>
        <h2 className="text-xl md:text-4xl font-semibold mx-9">
          <span className="text-[#741fd9] font-bold">Link </span>
          <span>page in 3</span>
        </h2>
      </section>
    </>
  );
}

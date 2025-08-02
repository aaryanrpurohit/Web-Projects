
const info = () => {
  return (
    <>
      <section className="w-screen h-screen flex flex-col gap-20 justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-7">
          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight ">
            What Makes Linkcore Great?
          </h4>
          <p className="text-center text-base sm:text-lg max-w-md text-[#aeaeaf]">
            Simple, modern tools to connect your audience with everything you
            do.
          </p>
        </div>
        <div className="rounded-lg p-10 grid grid-cols-3 border-4 border-[#1c1a1e] mx-15 w-auto gap-15">
          <div className="w-full h-xl m-4 border-gray-800 flex flex-col gap-15 group cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-[#1c1a1e] flex justify-center items-center group-hover:bg-[#8855ff] transition-colors duration-300">
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/?size=30&id=ShxmdGrBKyPw&format=png&color=FFFFFF"
                alt="link"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-semibold">
                One Link for Everything
              </h4>
              <p className="text-[#aeaeaf]">
                Collect all your social profiles, websites, and content in one
                simple page.
              </p>
            </div>
          </div>
          <div className="w-full h-xl m-4 border-gray-800 flex flex-col gap-15 group cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-[#1c1a1e] flex justify-center items-center group-hover:bg-[#8855ff] transition-colors duration-300">
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/?size=30&id=102595&format=png&color=FFFFFF"
                alt="link"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-semibold">
                Customizable Design
              </h4>
              <p className="text-[#aeaeaf]">
                Personalize your page with custom colors, fonts, and layout styles.
              </p>
            </div>
          </div>
          <div className="w-full h-xl m-4 border-gray-800 flex flex-col gap-15 group cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-[#1c1a1e] flex justify-center items-center group-hover:bg-[#8855ff] transition-colors duration-300">
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/?size=30&id=ZwGNoFXGbt9n&format=png&color=FFFFFF"
                alt="link"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-semibold">
                Mobile-Optimized
              </h4>
              <p className="text-[#aeaeaf]">
                Flawless experience across all devices — from pocket to desktop.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-screen max-h-xs">
        <img src="/brand.png" alt="brands" className="w-2xl h-15 mx-6" />
        </div>
      </section>
    </>
  );
};

export default info;

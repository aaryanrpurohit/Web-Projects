
const Info = () => {
  return (
    <section className="w-full min-h-screen flex flex-col gap-16 justify-center items-center px-4 py-16">
      {/* Header */}
      <div className="text-center flex flex-col gap-5 max-w-xl">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          What Makes Linkcore Great?
        </h4>
        <p className="text-base sm:text-lg text-[#aeaeaf]">
          Simple, modern tools to connect your audience with everything you do.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 px-2 sm:px-6 w-full max-w-7xl">
        {[
          {
            icon: "https://img.icons8.com/?size=30&id=ShxmdGrBKyPw&format=png&color=FFFFFF",
            title: "One Link for Everything",
            description:
              "Collect all your social profiles, websites, and content in one simple page.",
          },
          {
            icon: "https://img.icons8.com/?size=30&id=102595&format=png&color=FFFFFF",
            title: "Customizable Design",
            description:
              "Personalize your page with custom colors, fonts, and layout styles.",
          },
          {
            icon: "https://img.icons8.com/?size=30&id=ZwGNoFXGbt9n&format=png&color=FFFFFF",
            title: "Mobile-Optimized",
            description:
              "Flawless experience across all devices — from pocket to desktop.",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="border border-[#1c1a1e] rounded-lg p-6 flex flex-col gap-6 group cursor-pointer transition-transform hover:scale-[1.03]"
          >
            <div className="w-12 h-12 rounded-lg bg-[#1c1a1e] flex justify-center items-center group-hover:bg-[#8855ff] transition-colors duration-300">
              <img src={feature.icon} alt="icon" className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl sm:text-2xl font-semibold">
                {feature.title}
              </h4>
              <p className="text-sm sm:text-base text-[#aeaeaf]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Brand Image */}
      <div className="w-full flex justify-center items-center mt-10">
        <img
          src="/brand.png"
          alt="brands"
          className="w-3/4 sm:w-1/2 lg:w-1/3 max-w-md object-contain"
        />
      </div>
    </section>
  );
};

export default Info;

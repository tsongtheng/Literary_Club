import heroBgImage from "./../../../assets/images/hero-bg.jpg";
const Hero = () => {
  return (
    <section
      className="h-[90vh] relative text-center  text-gray-300 bg-cover bg-center bg-gray-600 transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${heroBgImage})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>

      <div className="absolute w-full h-full px-8 flex flex-col  justify-center items-center gap-10">
        <h2 className="lg:text-4xl text-3xl font-semibold">
          YOUTH OF JONGCHUM PONTHAI
        </h2>

        <h1 className="lg:text-7xl md:text-6xl text-5xl font-extrabold">
          Literary Club of Jongchum
        </h1>
      </div>
    </section>
  );
};

export default Hero;

import quoteBg from "../../../assets/images/quote_bg.jpg";

const Quote = () => {
  return (
    <section
      className="w-full 2xl:px-52 lg:py-24 xl:px-24 lg:px-16 py-16 px-8 text-white text-center flex flex-col justify-center items-center gap-2 bg-cover bg-no-repeat bg-fixed bg-top"
      style={{ backgroundImage: `url(${quoteBg})` }}
    >
      <h2 className="lg:text-4xl text-3xl italic">
        &quot;Things usually work out in the end. What if they don&apos;t? That
        just means you haven&apos;t come to the end yet.&quot;
      </h2>
      <p className="text-xl italic">—Jeanette Walls</p>
    </section>
  );
};

export default Quote;

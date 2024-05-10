import donateImg from "../../../assets/images/donate.jpg";
import DonateButton from "../../Buttons/DonateRectangelButton";

const Donate = () => {
  return (
    <section className="w-full lg:h-[550px] flex lg:flex-row flex-col">
      <div className="lg:w-[40%] w-auto px-14 py-16 bg-red-800 flex flex-col justify-center items-center gap-7">
        <h2 className="text-6xl font-bold text-white">Join Us</h2>
        <p className="text-white text-4xl text-center">
          Encourage
          <br />
          Our Youngsters
        </p>

        <DonateButton />
      </div>

      <div className="flex-1">
        <img
          src={donateImg}
          alt="donate-image"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};
export default Donate;

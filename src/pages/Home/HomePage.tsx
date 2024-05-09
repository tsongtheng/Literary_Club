import Hero from "../../components/Main/Hero/Hero";
import Story from "../../components/Main/Story/Story";
import Stats from "../../components/Main/Stats/Stats";
import About from "../../components/Main/About/About";
import Team from "../../components/Main/Team/Team";
import Quote from "../../components/Main/Quote/Quote";
import Blogs from "../../components/Main/Blogs/Blogs";
import Gallery from "../../components/Main/Gallery/Gallery";
import Events from "../../components/Main/Events/Events";
import Donate from "../../components/Main/Donate/Donate";
import FAQComponent from "../../components/Main/FAQ/FAQComponent";

const HomePage = () => {
  return (
    <main className="lg:mt-24 sm:mt-[88px] mt-[72px]">
      <Hero />
      <Story />
      <Stats />
      <About />
      <Team />
      <Quote />
      <Blogs />
      <Gallery />
      <Events />
      <Donate />
      <FAQComponent />
    </main>
  );
};

export default HomePage;

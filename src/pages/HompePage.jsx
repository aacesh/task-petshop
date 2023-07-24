import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import AboutUs from "../features/hompepage/components/AboutUs";
import Blogs from "../features/hompepage/components/Blogs";
import GetNow from "../features/hompepage/components/GetNow";
import Hero from "../features/hompepage/components/Hero";
import OurService from "../features/hompepage/components/OurService";
import PetCollection from "../features/hompepage/components/PetCollection";

const HompePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <AboutUs />
      <OurService />
      <PetCollection />
      <GetNow />
      <Blogs />
      <Footer />
    </div>
  );
};

export default HompePage;

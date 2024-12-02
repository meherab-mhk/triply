import Banner from "../components/Banner";
import CountriesSection from "../components/CountriesSection";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import TouristSpots from "../components/TouristSpot";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <TouristSpots></TouristSpots>
      <CountriesSection></CountriesSection>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </>
  );
};

export default Home;

import Hero from "./hero";
import HomeOffsetPhoto from "./home-offset-photo";
import ServicesDropdown from "./services-dropdown";
import BrickParallax from "./brick-parallax";
import OurTeam from "./our-team";
import Testimonial from "./testimonial";

function Home() {
  return (
    <div className="home-content">
        <Hero />
        <HomeOffsetPhoto />
        <ServicesDropdown />
        <BrickParallax />
        <OurTeam />
        <Testimonial />
    </div>
  );
}

export default Home;

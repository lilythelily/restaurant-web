import Hero from "./Hero";
import FeaturedMenu from "./FeaturedMenu";
import Testimonials from "./Testimonials";
import About from "./About";
import Subscribe from "./Subscribe";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <FeaturedMenu />
      <Testimonials />
      <About />
      <Subscribe />
    </main>
  );
};

export default Homepage;

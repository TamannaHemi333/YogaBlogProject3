// Import necessary components
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Elementor from "../components/Elementor/Elementor";
import Responsive from "../components/Responsive/Responsive";
import Inner from "../components/Inner/Inner";
import Multiple from "../components/Multiple/Multiple";
import Ports from "../components/Ports/Ports";
import Footer from "../components/Footer/Footer";
import Service from "../components/Service/Service";
import Kals from "../components/Kals/Kals";

// Define the Home functional component
const Home = () => {
  return (
    <div>
      {/* Render each imported component */}
      <Header />
      <Hero />
      <Features />
      <Service />
      <Elementor />
      <Responsive />
      <Kals />
      <Inner />
      <Multiple />
      <Ports />
      <Footer />
    </div>
  );
}

// Export the Home component
export default Home;



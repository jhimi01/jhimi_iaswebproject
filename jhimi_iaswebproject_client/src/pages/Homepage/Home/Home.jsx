import Lottie from "lottie-react";
import animation from "../../../../public/Animation2.json";
import "./Home.css";
import Contact from "../Contact/Contact";
import About from "../About/About";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>IAS Web</title>
      </Helmet>
      <div
        style={{
          backgroundColor: "#FBAB7E",
          backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
        }}
        className="md:h-[70vh] my-10 rounded-xl md:w-10/12 w-11/12 mx-auto md:flex items-center justify-between"
      >
        <div className="md:w-1/2 px-10 md:py-0 py-5 md:text-start text-center space-y-4">
          <h1 className="text-5xl font-mono font-semibold">{`Let's learn Together`}</h1>
          <p className="text-gray-500 font-thin">
            Welcome to IAS Web, your gateway to a world of knowledge and
            learning. At IAS Web, we believe in the power of education to
            transform lives. Our mission is to provide a platform where
            individuals can come together to learn, explore, and grow.
          </p>
          <NavLink to="/allqsn">
            <button className="button-54 font-mono mt-4">start learning</button>
          </NavLink>
        </div>
        <div className="md:w-1/2">
          <Lottie animationData={animation} />
        </div>
      </div>

      <About />

      <Contact />
    </>
  );
};

export default Home;

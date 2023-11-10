import Lottie from "lottie-react";
import animation from "../../../../public/Animation.json";
import './Home.css'
import Contact from "../Contact/Contact";

const Home = () => {
  return (
   <>
    <div
      style={{
        backgroundColor: "#FBAB7E",
        backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
      }}
      className="md:h-[70vh] my-10 rounded-xl md:w-10/12 w-11/12 mx-auto md:flex items-center justify-between"
    >
      <div className="md:w-1/2 px-10 md:py-0 py-5 md:text-start text-center space-y-4">
        <h1 className="text-5xl font-mono font-semibold">{`Let's learn Together`}</h1>
        <p className="text-gray-500 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam nobis, corrupti eius nisi deserunt adipisci qui explicabo quasi saepe.</p>
        <button className="button-54 font-mono">start quiz</button>
      </div>
      <div className="md:w-1/2">
        <Lottie animationData={animation} />
      </div>
    </div>


    <Contact />
   
   </>
  );
};

export default Home;

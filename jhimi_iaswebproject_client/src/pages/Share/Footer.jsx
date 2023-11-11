import Lottie from "lottie-react";
import walk from "../../../public/walk";
import walk2 from "../../../public/walk2";

const Footer = () => {
  return (
    <footer className="overflow-hidden">
      <div className="flex items-center infiniteAnimation">
        <div className="w-[200px]">
        <Lottie animationData={walk}  />
        </div>
        <div className="w-[120px]">
        <Lottie animationData={walk2} />
        </div>
      </div>
      <div className="LinkTiems -mt-5">
        <div className="flex flex-col items-center py-10">
          <p className="text-white text-sm mb-2">&copy; 2023 Your Company</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

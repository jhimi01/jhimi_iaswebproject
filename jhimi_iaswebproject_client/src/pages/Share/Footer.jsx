
const Footer = () => {
  return (
    <footer className="LinkTiems py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
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

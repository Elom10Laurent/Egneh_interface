import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#FE41C4]  mx-auto max-w-7xl  sm:px-6 lg:px-8 text-white  px-4 py-14 rounded-xl">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <nav className="flex justify-center flex-wrap gap-6 text-sm">
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Blog
          </a>
          <a href="#" className="hover:text-white transition">
            Jobs
          </a>
          <a href="#" className="hover:text-white transition">
            privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Accessibility
          </a>
          <a href="#" className="hover:text-white transition">
            Partners
          </a>
        </nav>

        <div className="flex justify-center gap-6 text-lg">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          {/* <a href="#">
            <FaXTwitter />
          </a> */}
          <a href="#">
            <FaGithub />
          </a>
          {/* <a href="#">
            <FaYoutube />
          </a> */}
        </div>

        <div className=" items-center space-x-2 bg-[#FE41C4] p-4 rounded-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2  bg-purple-400  text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-900 transition">
            Subscribe
          </button>
        </div>

        <p className="text-sm">&copy; 2025 Egneh, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;

import logo from "../assets/kevinRushLogo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="flex mb-20 items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <FaGithubSquare className="cursor-pointer hover:text-stone-400" />
        <FaLinkedin className="cursor-pointer hover:text-blue-300" />
        <FaSquareXTwitter className="cursor-pointer hover:text-gray-50" />
        <FaSquareInstagram className="cursor-pointer hover:text-orange-500" />
      </div>
    </nav>
  );
}

export default Navbar;

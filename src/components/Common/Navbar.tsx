import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import WalletModel from "./WalletModel";
import { Notification, Wallet } from "../../assets/icons/Index";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (buttonId: any) => {
    setActiveButton(buttonId);
  };

  return (
    <nav className="bg-transparent w-full">
      <div className="containerlayout flex items-center justify-between pt-5 pb-2 px-10">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-400">
            <img src={logo} alt="Logo" className="w-[170px] h-[76px]" /> {/* Adjust the height as needed */}
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            to="/dashboard"
            onClick={() => handleClick("button1")}
            className={`px-6 py-2 text-white rounded-md ${
              activeButton === "button1" ? "bg-[#00B2FF]" : "bg-[#18749D]"
            }`}
            style={{ textDecoration: "none" }}
          >
            Dashboard
          </Link>
          <Link
            to="/explore"
            onClick={() => handleClick("button2")}
            className={`px-6 py-2 text-white rounded-md ${
              activeButton === "button2" ? "bg-[#00B2FF]" : "bg-[#18749D]"
            }`}
            style={{ textDecoration: "none" }}
          >
            Explore
          </Link>
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton
              as={Link}
              to="#"
              onClick={() => handleClick("button3")}
              className={`inline-flex items-center px-6 py-2 text-white rounded-md ${
                activeButton === "button3" ? "bg-[#00B2FF]" : "bg-[#18749D]"
              }`}
              style={{ textDecoration: "none" }}
            >
              Build Portfolio
              <ChevronDownIcon aria-hidden="true" className="h-6 w-6 mt-[-1px] font-bold text-white" />
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <MenuItem>
                  <Link
                    to="/curated-portfolio"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    style={{ textDecoration: "none" }}
                  >
                    Curated Portfolio
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/portfolio-builder"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    style={{ textDecoration: "none" }}
                  >
                    Portfolio Builder
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/portfolio-manager"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    style={{ textDecoration: "none" }}
                  >
                    Portfolio Manager
                  </Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          <button
            onClick={() => setShowModal(true)}
            className={`px-6 py-2 flex items-center gap-2  text-white rounded-md ${
              activeButton === "button4" ? "bg-[#00B2FF]" : "bg-[#18749D]"
            }`}
            style={{ textDecoration: "none" }}
          >
            <img className="w-[18px] h-[18px]" src={Wallet} alt="" /> Connect Wallet
          </button>
          {showModal && <WalletModel showModel={setShowModal} />}
          <button className="relative rounded-full bg-[#1B293F]/30 p-2 w-10 h-10 flex items-center justify-center">
            <img src={Notification} alt="" />
            <span className="absolute top-[0.5px] right-0 block w-3 h-3 bg-[#18749D] rounded-full"></span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={Notification} alt="" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 text-white ${isOpen ? "block" : "hidden"}`}
      >
        <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-700">
          Dashboard
        </Link>
        <Link to="/explore" className="block px-4 py-2 hover:bg-gray-700">
          Explore
        </Link>
        <Link to="/build-portfolio" className="block px-4 py-2 hover:bg-gray-700">
          Build Portfolio
        </Link>
        <Link to="/connect-wallet" className="block px-4 py-2 hover:bg-gray-700">
          Connect Wallet
        </Link>
      </div>
    </nav>
  );
};

export default Index;

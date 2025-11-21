import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarLogo from "../../assets/logo.svg";
import { Menu, X } from "lucide-react";


export function LoadingScreen({ show }) {
  return (
    <div
      className={`
        fixed inset-0 bg-green-600 flex flex-col items-center justify-center z-[99999]
        transition-opacity duration-1000
        ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}>
      <div className="w-full flex justify-center items-center bg-green-650">
      <img
        src={NavbarLogo}
        
        className="w-20 h-20 md:w-40 md:h-40 object-cover  drop-shadow-xl"
        draggable="false"
      />
      </div>
      {/* Animated Image */}
    </div>
  );
}

export default function Navbar() {
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { title: "Home", to: "home" },
    { title: "How It Works", to: "works" },
    { title: "Features", to: "features" },
    { title: "Community", to: "community" },
  ];

  const toggleMenu = () => setMenu((prev) => !prev);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);

  // Smooth scroll or redirect to home sections
  const handleNavClick = (id) => {
    setMenu(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSignupClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/onboard";
    }, 1500);
  };

  const handleLoginClick = () => {
    setMenu(false);
    // Add login logic here if needed
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9999] bg-white md:bg-[#F7F5F9] transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        {/* Navbar Container */}
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
          {/* Logo */}
          <Link
            to="/"
            aria-label="CoSplitz home"
            className="flex items-center flex-shrink-0"
            onClick={() => setMenu(false)}
          >
            <img
              src={NavbarLogo}
              alt="CoSplitz logo"
              className="h-10 md:h-12 w-auto select-none pointer-events-none"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 mx-8">
            {navItems.map((item) => (
              <button
                key={item.to}
                onClick={() => handleNavClick(item.to)}
                className="text-gray-700 hover:text-[#1f8225] transition-colors text-[16px] font-medium whitespace-nowrap"
              >
                {item.title}
              </button>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4 text-[16px]">
            <button
              onClick={handleSignupClick}
              className="px-5 py-2.5 rounded-sm border-2 border-green-600 bg-white text-green-600 hover:bg-green-50 transition-colors font-medium"
            >
              SIGN UP
            </button>
            <Link
              to="/login"
              className="px-5 py-2.5 rounded-sm bg-green-600 hover:bg-green-700 text-white transition-colors font-medium"
            >
              LOG IN
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            aria-label={menu ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {menu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-500 md:hidden ${
            menu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenu(false)}
        />

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[10000] md:hidden ${
            menu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <img src={NavbarLogo} alt="CoSplitz" className="h-8" />
            <button
              onClick={toggleMenu}
              aria-label="Close menu"
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-6 space-y-5">
            {navItems.map((item) => (
              <button
                key={item.to}
                onClick={() => handleNavClick(item.to)}
                className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors text-left py-2"
              >
                {item.title}
              </button>
            ))}
          </nav>

          <div className="mt-8 px-6 flex flex-col gap-4">
            <button
              onClick={handleSignupClick}
              className="w-full text-center px-5 py-3 rounded-sm border-2 border-green-600 bg-white text-green-600 hover:bg-green-50 font-medium"
            >
              SIGN UP
            </button>
            <Link
              to="/login"
              onClick={handleLoginClick}
              className="w-full text-center px-5 py-3 rounded-sm bg-green-600 hover:bg-green-700 text-white font-medium"
            >
              LOG IN
            </Link>
          </div>
        </div>
      </header>

    </>
  );
}
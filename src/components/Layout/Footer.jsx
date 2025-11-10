import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Logo, Links & Social */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-12">
            {/* Logo and Tagline */}
            <div className="flex flex-col gap-6 max-w-md">
              <img 
                src={logo} 
                alt="Cosplitz Logo" 
                className="w-48 h-auto object-cover"
              />
              <p className="text-2xl font-light text-gray-700 leading-tight">
                Split Smarter, Spend Together
              </p>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">QuickLink</h3>
                <div className="flex flex-col gap-3">
                  <Link to="/home" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                    Home
                  </Link>
                  <Link to="/features" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                    Features
                  </Link>
                  <Link to="/faq" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                    FAQ
                  </Link>
                </div>
              </div>

            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-gray-900">Connect With Us</h3>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com" 
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-200 group"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://instagram.com" 
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-200 group"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://twitter.com" 
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-200 group"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="mailto:contact@cosplitz.com" 
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-200 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-8 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-900">
                Subscribe to our Newsletter
              </h3>
              <p className="text-gray-600">
                Get the latest updates on new features and tips for better expense sharing.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full sm:w-80"
                />
                <button className="bg-[#1F8225] text-white px-6 py-3 rounded-r-lg hover:bg-green-700 transition-colors duration-200 font-semibold flex items-center gap-2">
                  Subscribe
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-center items-center text-white bg-[#1F8225] text-sm text-center py-6 px-4">
© 2025 CoSplitz. Built for communities that share.
      </div>
    </footer>
  );
}
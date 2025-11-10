// src/components/Layout/Header.jsx
import { Menu, Bell, Settings } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Fixed import

function Header({ setSidebarOpen, sidebarOpen, isMobile }) {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* === Left Section === */}
        <div className="flex items-center gap-3 flex-1">
          {/* Sidebar Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-2 hover:bg-gray-100 rounded-lg ${
              !isMobile && sidebarOpen ? "hidden" : "block"
            }`}
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>

          {/* Search Input */}
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Find Splittz nearby: Taxi, Groceries, Tools..."
              className="w-full px-3 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* === Right Section === */}
        <div className="flex items-center gap-3">
          {/* Notification Icon */}
          <Link
            to="/dashboard/notification"
            className="relative p-2 hover:bg-gray-100 rounded-lg"
          >
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Link>

          {/* Settings Icon */}
          <Link
            to="/dashboard/settings"
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Settings size={18} />
          </Link>
        </div>
      </div>

      {/* Location Info */}
      <div className="px-4 py-1 text-sm text-gray-600">
        Ikeja, Lagos, Nigeria
      </div>
    </header>
  );
}

export default Header;

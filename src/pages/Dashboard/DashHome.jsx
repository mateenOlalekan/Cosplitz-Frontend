import { useState } from "react";
import {
  Menu,
  Bell,
  Settings,
  Heart,
  Share2, // ✅ changed to Share2 (from lucide-react)
  Users,
  Clock,
  MapPin,
  Users2,
} from "lucide-react";

import Overlay1 from "../../assets/Overlay.svg";
import Overlay2 from "../../assets/Overlay1.svg";
import Overlay3 from "../../assets/Overlay2.svg";
import Overlay4 from "../../assets/Overlay3.svg";

import ticket from "../../assets/ticket.jpg";
import shop from "../../assets/shop.jpg";
import car from "../../assets/car.jpg";
import pizza from "../../assets/pizza.jpg";

const Main = ({ sidebarOpen = false, isMobile = false, setSidebarOpen = () => {} }) => {
  const [activeTab, setActiveTab] = useState("All Active");
  const [activeSlide, setActiveSlide] = useState(0);

  const categories = [
    { icon: Overlay1, label: "Split Expenses" },
    { icon: Overlay2, label: "Bulk Orders & Riders" },
    { icon: Overlay3, label: "Borrow/Lend" },
    { icon: Overlay4, label: "Crowdfund" },
  ];

  const splits = [
    {
      id: 1,
      title: "Concert Ticket Group",
      price: "₦1000",
      participants: "2/3",
      timeLeft: "2 days left",
      distance: "1.2 km",
      creator: "Ade O.",
      image: ticket,
      badge: "Event",
      desc: "Music & Fun",
      descbg: "#65CADF33",
      desctext: "#65CADF",
    },
    {
      id: 2,
      title: "Shared Taxi to Campus",
      price: "₦2000",
      participants: "3/5",
      timeLeft: "15 min left",
      distance: "0.8 km",
      creator: "Jane D.",
      image: car,
      badge: "Ride",
      desc: "Transport",
      descbg: "#FB985133",
      desctext: "#FB9851",
    },
    {
      id: 3,
      title: "Bulk Groceries Order",
      price: "₦500",
      participants: "2/4",
      timeLeft: "3h left",
      distance: "1.2 km",
      creator: "Jones R.",
      image: shop,
      badge: "Food",
      desc: "Groceries",
      descbg: "#65CADF33",
      desctext: "#65CADF",
    },
    {
      id: 4,
      title: "Pizza Party Splittz",
      price: "₦1500",
      participants: "2/8",
      timeLeft: "45 min left",
      distance: "1.2 km",
      creator: "Sara K.",
      image: pizza,
      badge: "Food",
      desc: "Snacks",
      descbg: "#65CADF33",
      desctext: "#65CADF",
    },
  ];

  const deals = [
    {
      badge: "Limited Deal",
      discount: "40% Off",
      title: "Get Special Offer",
      description: "Flash Sale: Shared Taxi",
      details: "All Services Available / T & C Applied",
      time: "15 min left!",
      image: car,
      participants: "3/5 Participants",
      color: "from-[#065026] via-[#0F8542] to-[#065026]",
    },
    {
      badge: "Popular",
      discount: "30% Off",
      title: "Bulk Grocery Deal",
      description: "Flash Sale: Save on Group Orders",
      details: "Fresh Produce / Same Day Delivery",
      time: "30 min left!",
      image: shop,
      participants: "7/10 Participants",
      color: "from-[#065026] via-[#0F8542] to-[#065026]",
    },
    {
      badge: "Newest",
      discount: "20% Off",
      title: "Concert Deal",
      description: "Flash Sale: Shared Taxi",
      details: "Fresh Produce / Same Day Delivery",
      time: "30 min left!",
      image: ticket,
      participants: "7/10 Participants",
      color: "from-[#065026] via-[#0F8542] to-[#065026]",
    },
  ];

  return (
    <div className="w-full min-h-screen transition-all duration-300">
      <main className="space-y-10">
        {/* 🟩 Categories */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Quick Access Categories
          </h2>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
            {categories.map((cat, i) => (
              <button key={i} className="rounded-xl py-3 text-center transition">
                <img
                  src={cat.icon}
                  alt={cat.label}
                  className="w-10 h-10 mx-auto mb-2"
                />
                <p className="text-sm font-medium text-gray-900">{cat.label}</p>
              </button>
            ))}
          </div>
        </section>

        {/* 🟨 Special Deals Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">#SpecialForYou</h2>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
              {deals.map((deal, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col justify-between rounded-3xl overflow-hidden text-white shadow-lg hover:shadow-2xl transition-all duration-500 group`}
                >
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${deal.color} opacity-90`}
                  ></div>

                  <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start">
                      <span className="bg-emerald-200 text-emerald-800 text-xs w-fit font-semibold px-3 py-1 rounded-full">
                        {deal.badge}
                      </span>
                      {deal.discount && (
                        <span className="bg-[#DEF8D1] text-emerald-900 text-xs font-semibold px-3 py-1 rounded-full">
                          {deal.discount}
                        </span>
                      )}
                    </div>

                    <div className="mt-6 mb-4">
                      <h3 className="text-xl font-bold mb-1">{deal.title}</h3>
                      <p className="text-emerald-100 text-sm">{deal.description}</p>
                      <p className="text-emerald-100 text-xs mt-1">{deal.details}</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center justify-between text-xs text-white gap-4">
                        <div className="flex items-center gap-1">⏱ {deal.time}</div>
                        <div className="flex items-center gap-1">
                          <Users2 className="w-4 h-4" />
                          <span>{deal.participants}</span>
                        </div>
                      </div>
 
                      <button className="w-fit px-4 text-[12px] bg-[#FFF4D6] text-[#A37800] font-semibold py-2 rounded-lg transition">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🟦 Active Splittz Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Active Nearby Splittz
          </h2>

          {/* Tabs */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
            {["All Active", "Popular", "Newest", "Food", "Rides", "Tools"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Splittz Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {splits.map((split) => (
              <div
                key={split.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-3"
              >
                <div className="relative">
                  <img
                    src={split.image}
                    alt={split.title}
                    className="w-[600px] h=full object-cover rounded-lg mb-3"
                  />

                  {/* Top-Left Badge */}
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {split.badge}
                  </span>

                  {/* 🩷 Heart + 🔗 Share icons */}
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition">
                      <Heart size={16} className="text-red-500" />
                    </button>
                    <button className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition">
                      <Share2 size={16} className="text-gray-700" />
                    </button>
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {split.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2">
                  <MapPin className="inline-block w-3 h-3 mr-1" />
                  {split.distance} away
                </p>

                <div className="flex items-center justify-between text-xs text-gray-600">
                  <p className="flex items-center gap-1">
                    <Users size={12} />
                    {split.participants}
                  </p>
                  <p className="flex items-center gap-1">
                    <Clock size={12} />
                    {split.timeLeft}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <p className="text-green-600 font-semibold">{split.price}</p>
                  <button className="text-sm text-green-600 hover:underline">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;

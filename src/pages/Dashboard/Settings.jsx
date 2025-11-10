import React, { useState } from 'react';
import { Home, FileText, MessageSquare, Wallet, MapPin, BarChart3, X, Bell, Settings, User, Lock, Shield, Headphones, LogOut, Trash2, Edit2, ChevronDown } from 'lucide-react';

export default function CosplitzSettings() {
  const [activeMenu, setActiveMenu] = useState('my-profile');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationalId: '',
    nationality: '',
    city: '',
    district: '',
    address: '',
  });



  const settingsMenu = [
    { id: 'my-profile', icon: User, label: 'My Profile' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'verification', icon: Shield, label: 'Verification status' },
    { id: 'support', icon: Headphones, label: 'Support' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex h-screen">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">


        {/* Settings Container */}
        <div className="w-full overflow-y-hidden">
          <div className="max-w-7xl mx-auto p-2 md:p-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Settings Sidebar */}
              <div className="md:col-span-1">
                {/* Settings Header */}
                <div className="flex items-center justify-between mb-6 md:mb-0">
                  <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                  <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
                    <X size={20} className="text-gray-600" />
                  </button>
                </div>

                <p className="text-sm text-gray-600 mb-6 hidden md:block">You can find all settings here</p>

                {/* Settings Menu */}
                <nav className="space-y-2">
                  {settingsMenu.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveMenu(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeMenu === item.id
                          ? 'bg-green-100 text-green-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon size={20} />
                      <span className="text-sm font-medium text-left">{item.label}</span>
                    </button>
                  ))}
                </nav>

                {/* Logout and Delete */}
                <div className="space-y-2 mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200">
                    <LogOut size={20} />
                    <span className="text-sm font-medium">Log out</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200">
                    <Trash2 size={20} />
                    <span className="text-sm font-medium">Delete account</span>
                  </button>
                </div>
              </div>

              {/* Settings Content */}
              <div className="md:col-span-3">
                {/* Profile Information Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Profile information</h2>
                  <button className="flex items-center gap-2 px-4 py-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit2 size={16} />
                    <span className="text-sm font-medium">Edit</span>
                  </button>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Alice Badmus</h3>
                      <p className="text-sm text-gray-600">View Profiles & Settings</p>
                    </div>
                  </div>
                </div>

                {/* Personal Details Form */}
                <form className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Personal details</h3>

                    {/* Row 1: First Name & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          First Name<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Last Name<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Email address<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Phone number<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Row 3: National ID */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        National identity number<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nationalId"
                        value={formData.nationalId}
                        onChange={handleInputChange}
                        placeholder="Enter you nationality identity number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Address</h3>

                    {/* Row 1: Nationality & City */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Nationality<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="nationality"
                          value={formData.nationality}
                          onChange={handleInputChange}
                          placeholder="Enter you nationality"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Enter your city"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Row 2: District & Address */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          District
                        </label>
                        <input
                          type="text"
                          name="district"
                          value={formData.district}
                          onChange={handleInputChange}
                          placeholder="Enter you districts"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Full address"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-end pt-8">
                    <button
                      type="button"
                      className="px-6 py-3 border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
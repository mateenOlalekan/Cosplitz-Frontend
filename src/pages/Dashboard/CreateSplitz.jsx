import React, { useState } from 'react';
import {
  Home,
  Share2,
  MessageSquare,
  Wallet,
  MapPin,
  BarChart3,
  Bell,
  Settings,
  Menu,
  X,
  ChevronLeft,
  Camera,
  Calendar,
  Clock,
  Wifi,
  AlertCircle,
  Shield
} from 'lucide-react';

const CreateSplitzPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({
    splitTitle: '',
    category: '',
    totalAmount: '₦10,000',
    participants: '4',
    costMethod: 'equal',
    includeMe: true,
    startDate: '2025-05-15',
    startTime: '12:00',
    endDate: '2025-05-17',
    endTime: '22:00',
    location: 'Computer Village, Ikeja, Lagos',
    visibility: 5,
    recurrence: 'Weekly',
  });

  const [imageFile, setImageFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(URL.createObjectURL(file));
    }
  };

  const handleCostMethodChange = (method) => {
    setFormData(prev => ({ ...prev, costMethod: method }));
  };

  const categories = [
    'Select Category',
    'Food & Groceries',
    'Transportation',
    'Events & Tickets',
    'Utilities',
    'Entertainment',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-4 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium mb-4">
            <ChevronLeft size={20} />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Create Splittz</h1>
        </div>

        {/* Form Sections */}
        <div className="space-y-6">

          {/* What are you splitting */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">What are you splitting?</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Split Title</label>
                <input
                  type="text"
                  name="splitTitle"
                  placeholder="e.g. Shared Costco Groceries"
                  value={formData.splitTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Split Type/Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image/Photo (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center gap-4 hover:border-green-500 transition cursor-pointer">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Camera size={20} className="text-gray-400" />
                  </div>
                  <label className="flex-1 cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <span className="text-green-600 font-medium">Choose File</span>
                  </label>
                </div>
                {imageFile && <img src={imageFile} alt="Preview" className="mt-3 h-24 rounded-lg" />}
              </div>
            </div>
          </section>

          {/* Cost and Participants */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Cost and Participants</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Total Amount</label>
                <input
                  type="text"
                  name="totalAmount"
                  value={formData.totalAmount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Participants Needed (excluding you)</label>
                <input
                  type="number"
                  name="participants"
                  value={formData.participants}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Cost Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Cost Sharing Method</label>
                <div className="space-y-3">
                  <button
                    onClick={() => handleCostMethodChange('equal')}
                    type="button"
                    className={`w-full p-3 border-2 rounded-lg text-left transition ${formData.costMethod === 'equal' ? 'border-green-600 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-4 h-4 rounded-full border-2 ${formData.costMethod === 'equal' ? 'bg-green-600 border-green-600' : 'border-gray-400'}`} />
                      <span className="font-medium text-gray-900">Equal Split</span>
                    </div>
                    <p className="text-xs text-gray-600 ml-6">All participants pay the same amount.</p>
                  </button>

                  <button
                    onClick={() => handleCostMethodChange('custom')}
                    type="button"
                    className={`w-full p-3 border-2 rounded-lg text-left transition ${formData.costMethod === 'custom' ? 'border-green-600 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full border-2 ${formData.costMethod === 'custom' ? 'bg-green-600 border-green-600' : 'border-gray-400'}`} />
                      <span className="font-medium text-gray-900">Custom Split</span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <input
                  type="checkbox"
                  checked={formData.includeMe}
                  onChange={(e) => setFormData(prev => ({ ...prev, includeMe: e.target.checked }))}
                  className="w-4 h-4 accent-green-600 rounded cursor-pointer"
                />
                <label className="text-sm font-medium text-gray-700 cursor-pointer">I want to be part of the split</label>
              </div>
            </div>
          </section>

          {/* Start & End Period */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Start & End Period</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Calendar size={16} /> Start Date
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Clock size={16} /> Start Time
                </label>
                <input
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, startTime: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Calendar size={16} /> End Date
                </label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Clock size={16} /> End Time
                </label>
                <input
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, endTime: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            </div>
          </section>

          {/* Location */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Location and Timing</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Split Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Computer Village, Ikeja, Lagos"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Visibility Radius: {formData.visibility} km</label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={formData.visibility}
                  onChange={(e) => setFormData(prev => ({ ...prev, visibility: e.target.value }))}
                  className="w-full h-2 bg-[#E4E4E4] rounded-lg cursor-pointer accent-green-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="repeat"
                    className="w-4 h-4 accent-green-600 rounded cursor-pointer"
                  />
                  <label htmlFor="repeat" className="text-sm font-medium text-gray-700 cursor-pointer">Repeat Split</label>
                </div>
                <div className="flex gap-2">
                  {['Weekly', 'Monthly'].map(freq => (
                    <button
                      key={freq}
                      onClick={() => setFormData(prev => ({ ...prev, recurrence: freq }))}
                      type="button"
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition ${formData.recurrence === freq ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Rules and Safety */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Rules and Safety</h2>

            <div className="space-y-3">
              <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded flex items-start gap-3">
                <AlertCircle size={20} className="text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-700 text-sm mb-1">Mandatory Refund Rule</h4>
                  <p className="text-sm text-red-600">A 5% charge applies if the split is canceled before 70% participation.</p>
                </div>
              </div>

              <div className="p-4 border-l-4 border-green-600 bg-green-50 rounded flex items-start gap-3">
                <Shield size={20} className="text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-700 text-sm">Secure Payment Protection</h4>
                  <p className="text-xs text-green-600">Always active for verified users.</p>
                </div>
              </div>
            </div>
          </section>

          <button className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
            Create Splittz
          </button>
        </div>
      </main>
    </div>
  );
};

export default CreateSplitzPage;

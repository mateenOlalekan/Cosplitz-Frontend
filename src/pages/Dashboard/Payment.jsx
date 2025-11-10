import React, { useState } from 'react';
import { Home, Share2, MessageSquare, Wallet, MapPin, BarChart3, Bell, Settings, Menu, X, ChevronLeft, Check, Copy } from 'lucide-react';

const PaymentPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('cards');
  const [cardType, setCardType] = useState('debit');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const paymentMethods = [
    { id: 'cards', label: 'Cards', icon: '💳' },
    { id: 'transfer', label: 'Transfer', icon: '💸' },
    { id: 'wallet', label: 'Wallet', icon: '👛' },
  ];

  const cardOptions = [
    { id: 'debit', label: 'Debit card', icon: '✓' },
    { id: 'credit', label: 'Credit card', icon: '☐' },
  ];

  return (
    <div className="min-h-screen ">
        <main className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium mb-4">
              <ChevronLeft size={20} />
              Back
            </button>
            <h1 className="text-4xl font-bold text-gray-900">Payment</h1>
          </div>

          {/* Cost Summary */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6 mb-8 border border-gray-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Total cost</span>
                <span className="text-2xl font-bold text-gray-900">₦10,000</span>
              </div>
              <div className="h-px bg-gray-300"></div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Per-person cost</span>
                <span className="text-2xl font-bold text-gray-900">₦2,000</span>
              </div>
            </div>
          </div>

          {/* Pay With Tabs */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="font-semibold text-gray-700">Pay With</span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>

            <div className="flex gap-4 justify-center mb-8">
              {paymentMethods.map(method => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    paymentMethod === method.id
                      ? 'bg-gray-300 text-gray-900'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {method.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Payment Method */}
          {paymentMethod === 'cards' && (
            <div className="space-y-6">
              {/* Card Type Selection */}
              <div>
                <div className="flex gap-4 mb-4">
                  {cardOptions.map(option => (
                    <button
                      key={option.id}
                      onClick={() => setCardType(option.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition ${
                        cardType === option.id
                          ? 'border-green-600 bg-green-50'
                          : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        cardType === option.id
                          ? 'bg-green-600 border-green-600'
                          : 'border-gray-400'
                      }`}>
                        {cardType === option.id && <Check size={16} className="text-white" />}
                      </div>
                      <span className={`font-medium ${cardType === option.id ? 'text-gray-900' : 'text-gray-700'}`}>
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Information */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Card Information</h3>
                
                <div className="space-y-4">
                  {/* Card Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Enter card number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Expiry and CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="XXX"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Save Card Checkbox */}
                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="saveCard"
                      checked={formData.saveCard}
                      onChange={(e) => setFormData(prev => ({ ...prev, saveCard: e.target.checked }))}
                      className="w-4 h-4 accent-green-600 rounded cursor-pointer"
                    />
                    <label htmlFor="saveCard" className="text-sm text-gray-600 cursor-pointer">
                      Save this card
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Transfer Payment Method */}
          {paymentMethod === 'transfer' && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-4">Bank Transfer Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-3 bg-white rounded border border-blue-200">
                  <span className="text-gray-700">Account Number:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-semibold text-gray-900">1234567890</span>
                    <button className="p-1 hover:bg-gray-100 rounded transition">
                      <Copy size={16} className="text-blue-600" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border border-blue-200">
                  <span className="text-gray-700">Bank Name:</span>
                  <span className="font-semibold text-gray-900">First Bank Nigeria</span>
                </div>
              </div>
            </div>
          )}

          {/* Wallet Payment Method */}
          {paymentMethod === 'wallet' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-4">Cosplitz Wallet</h3>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded border border-green-200">
                  <p className="text-sm text-gray-700 mb-1">Wallet Balance</p>
                  <p className="text-2xl font-bold text-green-600">₦5,500</p>
                </div>
                <p className="text-xs text-green-700">Sufficient balance available. Click Make Payment to proceed.</p>
              </div>
            </div>
          )}

          {/* Make Payment Button */}
          <button className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition mt-8">
            Make Payment
          </button>

          {/* Security Info */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-xs text-gray-600 text-center">
              🔒 Your payment information is encrypted and secure. We never store your full card details.
            </p>
          </div>
        </main>
    </div>
  );
};

export default PaymentPage;
export default function CosplitzSettings() {

  // Render the appropriate component based on activeMenu


  return (
<div className="min-h-screen bg-white p-6">
  <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
  <p className="text-gray-600 mt-2">You can find all settings here</p>

  <ul className="mt-6 space-y-4">
    {Object.entries(settings).map(([key, value]) => (
      <li key={key} className="flex items-center">
        <input
          type="checkbox"
          checked={value}
          onChange={() => handleToggle(key)}
          className="h-5 w-5 text-green-500 rounded focus:ring-green-400"
        />
        <label className="ml-3 text-gray-700 capitalize">
          {key.replace(/([A-Z])/g, ' $1').trim()}
        </label>
      </li>
    ))}
  </ul>

  <button className="mt-8 text-red-600 font-semibold">
    Delete account
  </button>
</div>
  );
}
import Loading from "../assets/logo.svg"
export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">

      {/* Injection of keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>

      {/* Logo */}
      <img
        src={Loading}  // <-- replace with your logo path
        alt="App Logo"
        className="w-20 h-20 animate-pulse opacity-90"
        style={{ animation: "fadeIn 0.9s ease-in-out" }}
      />

      {/* Loading text */}
      <p
        className="mt-4 text-gray-700 font-medium tracking-wide"
        style={{ animation: "fadeIn 1.3s ease-in-out" }}
      >
        Loading, please wait...
      </p>

      {/* Spinner */}
      <div
        className="mt-6 w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"
        style={{ animationDelay: "0.2s" }}
      ></div>
    </div>
  );
}

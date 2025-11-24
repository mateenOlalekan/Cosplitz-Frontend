// Loading.jsx

import  NavbarLogo  from "../src/assets/logo.svg"; // For SVG as React component

function Loading({ show }) {
  return (
    <div
      className={`fixed inset-0 bg-green-600 flex flex-col items-center justify-center z-[99999]
        transition-opacity duration-1000
        ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="flex justify-center items-center">
        <img src={NavbarLogo} className="w-20 h-20 md:w-40 md:h-40 drop-shadow-xl" />
      </div>
    </div>
  );
}

export default Loading;

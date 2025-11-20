import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Layout/Sidebar";
import Header from "../../components/Layout/DashHeader";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen h-screen w-full bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        isMobile={isMobile}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        {/* Top Navigation */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}        
        />

        {/* Outlet renders nested dashboard pages */}
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

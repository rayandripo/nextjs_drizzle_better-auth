"use client";
import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { MobileSidebar } from "@/components/MobileSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    if (window.innerWidth >= 1024) {
      // Desktop behavior: toggle sidebar collapse
      setIsSidebarCollapsed(!isSidebarCollapsed);
    } else {
      // Mobile behavior: toggle mobile sidebar sheet
      setIsMobileSidebarOpen(!isMobileSidebarOpen);
    }
  };

  useEffect(() => {
    // Close the mobile sidebar if the window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen  dark:bg-[#050520]">
      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar isCollapsed={isSidebarCollapsed} />
      </div>

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
        }`}
      >
        <TopBar onToggleSidebar={handleToggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

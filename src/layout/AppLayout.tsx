import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components/Common";

type IAppLayoutProps = object;

const AppLayout: React.FC<IAppLayoutProps> = () => {
	return (
		<>
        <Navbar />
		<div className="containerlayout flex">
      <Sidebar />
      <div className="flex-1 px-10">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
		</>
	);
};

export default AppLayout;

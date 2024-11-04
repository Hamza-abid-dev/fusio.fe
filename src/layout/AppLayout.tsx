import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Sidebar } from "../components/Common";
import { AppBgBottom, AppBgTop } from "../assets/icons/Index";

type IAppLayoutProps = object;


const AppLayout: React.FC<IAppLayoutProps> = () => {
  const location = useLocation();
  console.log(location)
	return (
		<div className={location.pathname === '/dashboard' ? `dashboardBg` : ''}>
      {location.pathname !== '/dashboard' ? 
      <>
      <img className="BgTop" src={AppBgTop} alt="" />
      <img className="BgBottom" src={AppBgBottom} alt="" />
      </>
      : null}
        <Navbar />
		<div className="containerlayout flex min-h-[100vh]">
      <Sidebar />
      <div className="lg:px-10 md:px-5 px-3 flex-wrap w-[100%]">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
		</div>
	);
};

export default AppLayout;

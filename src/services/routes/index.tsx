import { Navigate, Route, Routes } from "react-router-dom";



// import RequireAuth from "./auth";
import AppLayout from "../../layout/AppLayout";
import Dashboard from "../../pages/Dashboard/Loadable";
import Portfolio from "../../pages/Portfolio/Loadable";
import Transaction from "../../pages/Transaction/Loadable";
import Portfolios from "../../pages/Portfolios/Loadable";
import MyOrders from "../../pages/MyOrders/Loadable";
import WithdrawRequests from "../../pages/WithdrawRequests/Loadable";
import RebalanceRequests from "../../pages/RebalanceRequests/Loadable";
import Explore from "../../pages/Explore";
import ExploreCardDetail from "../../pages/ExploreCardDetails";
import CuratedPortfolio from "../../pages/CuratedPortfolio";
import PortfolioBuilder from "../../pages/PortfolioBuilder";
import PortfolioManager from "../../pages/PortfolioManager/Index";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="investments" element={<Portfolio />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="portfolios" element={<Portfolios />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="withdrawrequests" element={<WithdrawRequests />} />
          <Route path="rebalancerequests" element={<RebalanceRequests />} />
          <Route path="explore" element={<Explore />} />
          <Route path="explore/:title" element={<ExploreCardDetail />} />
          <Route path="curated-portfolio" element={<CuratedPortfolio />} />
          <Route path="portfolio-builder" element={<PortfolioBuilder />} />
          <Route path="portfolio-manager" element={<PortfolioManager />} />
        </Route>
        {/* Add other routes here if needed */}
      </Routes>
    </>
  );
}

export default AppRoutes;

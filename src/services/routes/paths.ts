// src/routes/paths.ts
export interface IPaths {
	dashboard: string;
	portfolio: string;
	transaction: string;
	portfolios: string;
	myorders: string;
	withdrawrequests: string;
	rebalancerequests: string;
  }
  
  export const paths: IPaths = {
	dashboard: "/dashboard",
	portfolio: "/portfolio",
	transaction: "/transaction",
	portfolios: "/portfolios",
	myorders: "/myorders",
	withdrawrequests: "/withdrawrequests",
	rebalancerequests: "/rebalancerequests",
  };
  
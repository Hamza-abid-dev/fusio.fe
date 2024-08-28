import { useState } from "react";
import { Link } from "react-router-dom";
import path from "path";
import { paths } from "../../services/routes/paths";
const Index = () => {
	const [activeButton, setActiveButton] = useState(null);

	const handleClick = (buttonId: any) => {
		setActiveButton(buttonId);
	};
	return (
		<div>
			<div className="main px-10 md:flex hidden">
				<div className="mt-16 w-[100%]">
					<div className="flex flex-col text-black text-xl font-semibold gap-[30px]">
						<Link
							onClick={() => handleClick("button1")}
							className={`relative font-semibold rounded-md ${
								activeButton === "button1"
									? 'text-[#18749D] before:content-[""] before:px-[6px] before:rounded-e-lg before:py-6 before:top-[-10px] before:left-[-40px] before:absolute before:bg-[#18749D]'
									: "text-[black]"
							}`}
							to="portfolio"
						>
							My Portfolio
						</Link>
						<Link
							onClick={() => handleClick("button2")}
							className={`relative font-semibold rounded-md ${
								activeButton === "button2"
									? 'text-[#18749D] before:content-[""] before:px-[6px] before:rounded-e-lg before:py-6 before:top-[-10px] before:left-[-40px] before:absolute before:bg-[#18749D]'
									: "text-[black]"
							}`}
							to="/transaction"
						>
							Transaction History
						</Link>
						<Link
							onClick={() => handleClick("button3")}
							className={`relative font-semibold rounded-md ${
								activeButton === "button3"
									? 'text-[#18749D] before:content-[""] before:px-[6px] before:rounded-e-lg before:py-6 before:top-[-10px] before:left-[-40px] before:absolute before:bg-[#18749D]'
									: "text-[black]"
							}`}
							to="/portfolios"
						>
							Portfolios
						</Link>
						<Link
							onClick={() => handleClick("button4")}
							className={`relative font-semibold rounded-md ${
								activeButton === "button4"
									? 'text-[#18749D] before:content-[""] before:px-[6px] before:rounded-e-lg before:py-6 before:top-[-10px] before:left-[-40px] before:absolute before:bg-[#18749D]'
									: "text-[black]"
							}`}
							to="/myorders"
						>
							My Orders
						</Link>
						<Link
							onClick={() => handleClick("button5")}
							className={`relative font-semibold rounded-md ${
								activeButton === "button5"
									? 'text-[#18749D] before:content-[""] before:px-[6px] before:rounded-e-lg before:py-6 before:top-[-10px] before:left-[-40px] before:absolute before:bg-[#18749D]'
									: "text-[black]"
							}`}
							to="/withdrawrequests"
						>
							Withdraw Requests
						</Link>
						<Link
							onClick={() => handleClick("button6")}
							className={`relative font-semibold rounded-md ${
								activeButton === "button6"
									? 'text-[#18749D] before:content-[""] before:px-[6px] before:rounded-e-lg before:py-6 before:top-[-10px] before:left-[-40px] before:absolute before:bg-[#18749D]'
									: "text-[black]"
							}`}
							to="/rebalancerequests"
						>
							Rebalance Requests
						</Link>
						<Link
							onClick={() => handleClick("button7")}
							className={`relative font-semibold rounded-md ${
								activeButton === "button7"
									? 'text-[#18749D] before:content-[""] before:px-[6px] before:rounded-e-lg before:py-6 before:top-[-10px] before:left-[-40px] before:absolute before:bg-[#18749D]'
									: "text-[black]"
							}`}
							to="/signout"
						>
							Sign out <i className="fa fa-sign-out ml-5"></i>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;

import bg from "../../assets/images/exploreCardBg.png";
import Card from "../../components/Common/Card";
import Chart from "../../components/Common/Chart";
import cardimg from "../../assets/images/card1.png";
import cardimg2 from "../../assets/images/card2.png";
import cardimg3 from "../../assets/images/card3.png";
import logo from "../../assets/images/cardlogo.png";
import logo1 from "../../assets/images/cardlogo1.png";
import logo2 from "../../assets/images/cardlogo2.png";
import { Link } from "react-router-dom";
import { arrowLeft, arrowRight } from "../../assets/icons/Index";
import { TopPortfoliosCard } from "../../components/Common";

const Dashboard = () => {
	return (
		<div className="border border-[#18749D]/30 shadow-md rounded-lg p-5">
		{/* Header Section */}
		<div
		  className="pt-3 px-4 pb-5 rounded-lg text-white"
		  style={{
			backgroundImage: `url(${bg})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		  }}
		>
		  <h1 className="text-xl sm:text-4xl md:text-5xl font-bold my-3">Welcome Carolina!</h1>
		  <h5 className="text-xs md:text-lg">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim rutrum dui quis <br />
			malesuada. Nam id dapibus augue. Nulla convallis condimentum orci, et varius eros semper in.
		  </h5>
		</div>
  
		{/* Market Trend and High Growth Portfolios */}
		<div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-20 mt-5">
		  {/* Market Trend */}
		  <div className="flex-1">
			<h1 className="text-lg sm:text-xl font-semibold my-5">Market Trend</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
			  <Card img={cardimg} title="BTCB" semiTitle="(60%)" percent="0.26%" icon="arrow-up" />
			  <Card img={cardimg2} title="FET" semiTitle="(5%)" percent="-0.23%" icon="arrow-down" />
			  <Card img={cardimg3} title="PEPE" semiTitle="(5%)" percent="0.53%" icon="arrow-up" />
			  <Card img={cardimg} title="BTCB" semiTitle="(60%)" percent="0.26%" icon="arrow-down" />
			</div>
		  </div>
  
		  {/* High Growth Portfolios */}
		  <div className="flex-1">
			<h1 className="text-lg sm:text-xl font-semibold mt-5 mb-16">High growth portfolios</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-14">
			  <TopPortfoliosCard img={logo} title="Grey Jabesi" desc="+16% Return Value"/>
			  <TopPortfoliosCard img={logo1} title="Crypto Sensei" desc="+16% Return Value"/>
			  <TopPortfoliosCard img={logo2} title="Cryptoface" desc="+16% Return Value"/>
			</div>
		  </div>
		</div>
  
		{/* Additional Information and Chart */}
		<div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10 mt-5">
		  {/* Information Links and Chart */}
		  <div className="flex flex-col gap-5 w-full lg:w-2/5">
			<div className="font-semibold text-sm sm:text-lg flex gap-5 lg:gap-9 flex-wrap">
			  <Link to="" className="hover:underline">Tvl</Link>
			  <Link to="" className="hover:underline">Volume</Link>
			  <Link to="" className="hover:underline">Raises</Link>
			  <Link to="" className="hover:underline">Stablecoins</Link>
			  <Link to="" className="flex gap-2 items-center">
				<img src={arrowLeft} alt="Arrow Left" />
				<img src={arrowRight} alt="Arrow Right" />
			  </Link>
			</div>
			<div>
			  <Chart />
			</div>
		  </div>
  
		  {/* How to Start Investing */}
		  <div className="w-full lg:w-3/5 mt-5 lg:mt-0">
			<h2 className="text-lg sm:text-xl font-semibold mt-2 mb-3">How to start investing:</h2>
			<div className="flex flex-wrap justify-between lg:flex-nowrap p-4 shadow-2xl border rounded-[15px] bg-white">
			  {[...Array(5)].map((_, index) => (
				<div key={index} className="flex flex-col items-center mx-2 mb-4 lg:mb-0">
				  <img className="w-[50px]" src={cardimg} alt="Investment Step" />
				  <h2 className="font-semibold mt-3">Swap</h2>
				  <p className="text-[10px] font-semibold text-gray-500 text-center">
					Lorem ipsum <br /> dolor sit <br /> amet consectetur.
				  </p>
				  <Link className="flex items-center gap-2 text-gray-500 text-sm mt-3" to="">
					Trade Now <img src={arrowRight} alt="Arrow Right" />
				  </Link>
				</div>
			  ))}
			</div>
		  </div>
		</div>
	  </div>
	);
};

export default Dashboard;

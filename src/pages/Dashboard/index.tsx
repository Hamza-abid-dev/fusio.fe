import bg from "../../assets/images/exploreCardBg.png";
import Card from "../../components/Common/Card";
import Chart from "../../components/Common/Chart";
import cardimg from "../../assets/images/card1.png";
import cardimg2 from "../../assets/images/card2.png";
import cardimg3 from "../../assets/images/card3.png";
import logo from "../../assets/images/cardlogo.png";
import logo1 from "../../assets/images/cardlogo1.png";
import logo2 from "../../assets/images/cardlogo2.png";
import invest1 from "../../assets/images/invest1.svg";
import invest2 from "../../assets/images/invest2.svg";
import invest3 from "../../assets/images/invest3.svg";
import invest4 from "../../assets/images/invest4.svg";
import invest5 from "../../assets/images/invest5.svg";
import { Link } from "react-router-dom";
import { arrowLeft, arrowRight } from "../../assets/icons/Index";
import { TopPortfoliosCard } from "../../components/Common";



const data = [
	{
		title: 'Connect Wallet:',
		desc: 'Connect existing DEX wallet at the top right, or create a new one by clicking on your wallet of choice.',
		img: invest1,
	},
	{
		title: 'Select Portfolio:',
		desc: 'Explore curated portfolios, select the one according to your risk endurance.',
		img: invest2,
	},
	{
		title: 'Confirm Investment:',
		desc: 'Enter investment amount, as less as $10. Click on invest',
		img: invest3,
	},
	{
		title: 'Check Growth:',
		desc: "See your investment growing in 'my portfolio'.",
		img: invest4,
	},
	{
		title: 'Rebalance Requests:',
		desc: "Approve rebalance requests to update your portfolios according to the fund manager's changing asset allocation.",
		img: invest5,
	},
]




const Dashboard = () => {
	return (
		<div className="border border-[#18749D]/30 shadow-md rounded-lg p-5">
		{/* Header Section */}
		<div
		  className="pt-3 px-6 pb-5 rounded-lg text-white"
		  style={{
			backgroundImage: `url(${bg})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		  }}
		>
		  <h1 className="dashboard-heading text-xl sm:text-4xl md:text-5xl font-[900] my-3">Welcome to Fusio!</h1>
		  <h5 className="text-xs md:text-lg text-white/80 mb-5">
		  A simple to use platform for both new and experienced crypto investors to create ther <br/> own diversified portfolios or invest in a curated one.
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
			<h1 className="text-lg sm:text-xl font-semibold mt-5 mb-16">Top Curated portfolios</h1>
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
		  <div className="flex flex-col gap-5 lg:w-[40%]">
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
			<h2 className="text-lg sm:text-xl font-semibold mt-2 mb-3">How to invest in curated portfolios:</h2>
				<div>
			<div className="grid grid-cols-5 lg:flex-nowrap p-4 shadow-2xl border rounded-[15px] bg-white">
				{data.map((x)=>(
					<div className="flex flex-col mx-2 mb-4 lg:mb-0">
				  <img className="w-[50px] h-[50px]" src={x.img} alt="Investment Step" />
				  <h2 className="font-semibold mt-3 text-xs">{x.title}</h2>
				  <p className="text-[10px] font-semibold text-gray-500">
					{x.desc}
				  </p>
				</div>
				))}
				<h2 className=" col-span-6 flex items-center gap-5 text-[#18749D] font-semibold">Don't want to invest in a curated portfolio? <a className="underline underline-offset-1 text-[#00B2FF]" href="#">Create your own</a></h2>
				</div>
			</div>
		  </div>
		</div>
	  </div>
	);
};

export default Dashboard;

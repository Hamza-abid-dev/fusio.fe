import { useState } from "react";
import { Link } from "react-router-dom";
import { ExploreCard } from "../../components/Common";
import logo2 from "../../assets/images/cardlogo2.png";
import logo3 from "../../assets/images/cardlogo3.png";
import logo4 from "../../assets/images/cardlogo4.png";
import logo5 from "../../assets/images/cardlogo5.png";
import logo6 from "../../assets/images/cardlogo6.png";
import logo7 from "../../assets/images/cardlogo7.png";


const card = [
	{
		img: logo2,
		title: 'CryptoFace Fund',
		desc1: 'Ticker: TEX',
		desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
		desc3: 'Expected Returns: Conservative',
		desc4: 'Transaction Fees: 2.5'
	},
	{
		img: logo3,
		title: "Sensei's Top Tier",
		desc1: 'Ticker: TEX',
		desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
		desc3: 'Expected Returns: Conservative',
		desc4: 'Transaction Fees: 2.5'
	},
	{
		img: logo4,
		title: 'UltraRun',
		desc1: 'Ticker: TEX',
		desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
		desc3: 'Expected Returns: Conservative',
		desc4: 'Transaction Fees: 2.5'
	},
	{
		img: logo5,
		title: 'RWA Fund',
		desc1: 'Ticker: TEX',
		desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
		desc3: 'Expected Returns: Conservative',
		desc4: 'Transaction Fees: 2.5'
	},
	{
		img: logo6,
		title: 'Pandora',
		desc1: 'Ticker: TEX',
		desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
		desc3: 'Expected Returns: Conservative',
		desc4: 'Transaction Fees: 2.5'
	},
	{
		img: logo7,
		title: 'Mega Cap Market Fund',
		desc1: 'Ticker: TEX',
		desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
		desc3: 'Expected Returns: Conservative',
		desc4: 'Transaction Fees: 2.5'
	},
	{
		img: logo2,
		title: 'CryptoFace Fund',
		desc1: 'Ticker: TEX',
		desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
		desc3: 'Expected Returns: Conservative',
		desc4: 'Transaction Fees: 2.5'
	},
	{
		img: logo3,
		title: "Sensei's Top Tier",
		desc1: 'Ticker: TEX',
		desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
		desc3: 'Expected Returns: Conservative',
		desc4: 'Transaction Fees: 2.5'
	},
	{
		img: logo4,
		title: 'UltraRun',
		desc1: 'Ticker: TEX',
		desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
		desc3: 'Expected Returns: Conservative',
		desc4: 'Transaction Fees: 2.5'
	}
]


const Explore = () => {
  const [activeButton, setActiveButton] = useState("button1");

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center bg-[#18749D] py-2 px-5 text-white rounded-lg mt-16">
  <div className="flex flex-col lg:flex-row items-center gap-6 font-semibold mb-4 lg:mb-0">
    <Link
      to=""
      className={`cursor-pointer ${
        activeButton === "button1"
          ? "underline underline-offset-[22px]"
          : "no-underline"
      }`}
      onClick={() => handleClick("button1")}
    >
      All Portfolios
    </Link>
    <Link
      to=""
      className={`cursor-pointer ${
        activeButton === "button2"
          ? "underline underline-offset-[22px]"
          : "no-underline"
      }`}
      onClick={() => handleClick("button2")}
    >
      Customized Portfolios
    </Link>
  </div>
  <div className="flex flex-col lg:flex-row items-center gap-5">
    <label className="inline-block ps-[0.15rem] hover:cursor-pointer">
      Show Enable/Disable
    </label>
    <input
      className="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#34C759] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#34C759] checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-[#34C759] checked:focus:bg-[#34C759] checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-[#34C759] dark:checked:after:bg-[#34C759]"
      type="checkbox"
      role="switch"
      checked={isChecked}
      onChange={handleChange}
    />
    <div className="flex flex-col lg:flex-row gap-3">
      <button className="py-3 px-5 flex gap-3 items-center rounded-lg bg-[#093B52]">
        <i className="fa fa-filter"></i> Portfolio type
      </button>
      <button className="py-3 px-5 flex gap-3 items-center rounded-lg bg-[#093B52]">
        <i className="fa fa-filter"></i> Return type
      </button>
    </div>
  </div>
</div>
	  <div className={isChecked ? "hidden" : "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10"}>
		{card.map((x)=>(
			<ExploreCard key={x.title} img={x.img} title={x.title} desc1={x.desc1} desc2={x.desc2} desc3={x.desc3} desc4={x.desc4}/>
		))}
	  </div>
    </>
  );
};

export default Explore;

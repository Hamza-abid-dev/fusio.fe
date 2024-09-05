import InvestmentCard from "../../components/Common/InvestmentCard";
import PortfolioCard from "../../components/Common/PortfolioCard";
import PortfolioChart from "../../components/Common/PortfolioChart";
import Card1 from '../../assets/images/card1.png'
import Card2 from '../../assets/images/card2.png'
import Card3 from '../../assets/images/card3.png'
import { Card } from "../../components/Common";


const cards = [
	{
		img: Card1,
		title: 'BTCB',
		semititle: '(60%)',
		percent: '0.26%',
		icon: 'arrow-up',
	},
	{
		img: Card3,
		title: 'PEPE',
		semititle: '(5%)',
		percent: '0.53%',
		icon: 'arrow-up',
	},
	{
		img: Card2,
		title: 'FET',
		semititle: '(5%)',
		percent: '-0.23%',
		icon: 'arrow-down',
	},
	{
		img: Card3,
		title: 'PEPE',
		semititle: '(5%)',
		percent: '0.53%',
		icon: 'arrow-up',
	},
	{
		img: Card1,
		title: 'BTCB',
		semititle: '(60%)',
		percent: '0.26%',
		icon: 'arrow-up',
	},
	{
		img: Card3,
		title: 'PEPE',
		semititle: '(5%)',
		percent: '0.53%',
		icon: 'arrow-up',
	},
	{
		img: Card1,
		title: 'BTCB',
		semititle: '(60%)',
		percent: '0.26%',
		icon: 'arrow-up',
	},
	{
		img: Card3,
		title: 'PEPE',
		semititle: '(5%)',
		percent: '0.53%',
		icon: 'arrow-up',
	},
	{
		img: Card2,
		title: 'FET',
		semititle: '(5%)',
		percent: '-0.23%',
		icon: 'arrow-down',
	},
	{
		img: Card1,
		title: 'BTCB',
		semititle: '(60%)',
		percent: '0.26%',
		icon: 'arrow-up',
	},
	{
		img: Card2,
		title: 'FET',
		semititle: '(5%)',
		percent: '-0.23%',
		icon: 'arrow-down',
	},
	{
		img: Card3,
		title: 'PEPE',
		semititle: '(5%)',
		percent: '0.53%',
		icon: 'arrow-up',
	},
	{
		img: Card1,
		title: 'BTCB',
		semititle: '(60%)',
		percent: '0.26%',
		icon: 'arrow-up',
	},
	{
		img: Card3,
		title: 'PEPE',
		semititle: '(5%)',
		percent: '0.53%',
		icon: 'arrow-up',
	},
	{
		img: Card1,
		title: 'BTCB',
		semititle: '(60%)',
		percent: '0.26%',
		icon: 'arrow-up',
	}
]

const Portfolio = () => {
  return (
    <div className="mt-14 mb-10">
  <div className="flex flex-col lg:flex-row gap-10">
    <div className="flex flex-col gap-5 w-full lg:w-2/3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <PortfolioCard
          title="Current Value"
          semiTitle="56.9879 USDC"
          return="7484"
          icon="arrow-up"
          usdc="15.16%"
        />
        <PortfolioCard
          title="Current Value"
          semiTitle="56.9879 USDC"
          return="7484"
          icon="arrow-down"
          usdc="15.16%"
        />
      </div>
      <div>
        <PortfolioChart />
      </div>
    </div>
    <div className="bg-[#18749D] p-5 rounded-xl flex flex-col gap-3 w-full lg:w-1/3">
      <h1 className="text-xl font-semibold text-white mb-2">
        All Investment
      </h1>
      <InvestmentCard
        title="Atlantis"
        value="56.8599 USDC"
        price="49.375 USDC"
      />
      <InvestmentCard
        title="Atlantis"
        value="-56.8599 USDC"
        price="49.375 USDC"
      />
    </div>
  </div>
  <div>
    <div className="bg-[#18749D] mt-14 mb-10 py-6 px-10 rounded-xl text-white font-semibold underline underline-offset-[25px]">
      <h1>All Assets</h1>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
      {cards.map((x, index) => (
        <Card
          key={index}
          img={x.img}
          title={x.title}
          semiTitle={x.semititle}
          percent={x.percent}
          icon={x.icon}
        />
      ))}
    </div>
  </div>
</div>

  );
};

export default Portfolio;

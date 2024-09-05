import React from 'react';
import { useParams } from 'react-router-dom';
import cardBg from '../../assets/images/exploreCardBg.png'; // Ensure this path is correct
import { cardData } from './carddata';
import { Card, CardDetailChart, ExploreDetailCard } from '../../components/Common';
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';

// Define the types for card details if needed
interface CardDetail {
  img: string;
  title: string;
  semititle: string;
  percent: string;
  icon: string;
}

// Define the component
const ExploreCardDetail: React.FC = () => {
  const { title } = useParams<{ title: string }>(); // Extract title from URL params
  const cardDetails = cardData.find((c) => c.title === title);

  if (!cardDetails) {
    return <div>Card not found</div>;
  }

  const card: CardDetail[] = [
    {
      img: card1,
      title: 'BTCB',
      semititle: '(60%)',
      percent: '0.26%',
      icon: 'arrow-up'
    },
    {
      img: card3,
      title: 'PEPE',
      semititle: '(5%)',
      percent: '0.53%',
      icon: 'arrow-up'
    },
    {
      img: card2,
      title: 'FET',
      semititle: '(5%)',
      percent: '0.23%',
      icon: 'arrow-down'
    },
    {
      img: card1,
      title: 'BTCB',
      semititle: '(60%)',
      percent: '0.26%',
      icon: 'arrow-up'
    },
    {
      img: card3,
      title: 'PEPE',
      semititle: '(5%)',
      percent: '0.53%',
      icon: 'arrow-up'
    },
    {
      img: card2,
      title: 'FET',
      semititle: '(5%)',
      percent: '0.23%',
      icon: 'arrow-down'
    }
  ];

  return (
    <>
      <div
        className="flex justify-between items-center text-white bg-no-repeat p-5 rounded-xl shadow-md bg-cover mt-12"
        style={{
          backgroundImage: `url(${cardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex items-center gap-5">
          <div>
            <img
              className="w-[50px] rounded-full border-2 border-[yellow]"
              src={cardDetails.img}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">{cardDetails.title}</h2>
            <div className="flex items-center gap-1">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-discord"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>
        </div>
        <div>
          <button className="py-2 pl-3 pr-10 rounded-lg bg-[#18749D] flex items-center gap-5">
            <i className="fa fa-filter"></i>Hourly
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        <ExploreDetailCard img="fa fa-dollar" title="TVL" desc="0" />
        <ExploreDetailCard img="fa fa-sack-dollar" title="Est. Returns" desc="Conservative" />
        <ExploreDetailCard img="fa fa-users" title="No. of investors" desc="1" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-5 mb-5">
        <div className="shadow-sm lg:col-span-2 shadow-[#18749D] rounded-lg py-4 px-7 bg-white/40">
          <h2 className="mb-4 text-lg font-semibold">Asset Allocation</h2>
          <div className="grid grid-cols-1 gap-2">
            {card.map((x) => (
              <Card
                key={x.title}
                img={x.img}
                title={x.title}
                semiTitle={x.semititle}
                percent={x.percent}
                icon={x.icon}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-4">
          <CardDetailChart />
        </div>
        <div className="lg:col-span-2 bg-[#18749D] p-4 rounded-lg text-white/80">
          <h2 className="text-xl font-semibold text-white">Investment Amount</h2>
          <h3 className='mt-5'>Enter Amount (USDC)</h3>
          <input
            className="mt-2 mb-5 rounded-md px-3 text-black w-full"
            type="text"
            name=""
            id=""
          />
          <h5>Fuel Fees: 0</h5>
          <h5>Transaction Fees: 2.5%</h5>
          <h5>Available Balance: 0</h5>
          <button className="mt-3 bg-[#00B2FF] py-2 px-7 rounded-md text-white">
            Invest
          </button>
          <br />  
          <button className="mt-3 bg-[#00B2FF] py-2 px-7 rounded-md text-white">
          Rebalance
          </button>
          <br />
          <button className="mt-3 bg-[#00B2FF] py-2 px-7 rounded-md text-white">
          withdraw
          </button>
        </div>
      </div>
    </>
  );
};

export default ExploreCardDetail;

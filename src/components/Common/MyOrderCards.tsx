// Importing necessary modules and assets
import React from 'react';
import cardBg from '../../assets/images/exploreCardBg.png'; // Ensure this path is correct

// Define the interface for the component props
interface MyOrderCardsProps {
  img: string;        // URL or path for the image
  title: string;      // Title of the card
  desc1: string;      // Description for amount
  desc2: string;      // Description for ticker
  desc3: string;      // Description for order
  desc4: string;      // Description for expected returns
}

// Functional component with typed props
const MyOrderCards: React.FC<MyOrderCardsProps> = (props) => {
  return (
    <div>
      <div
        className="bg-no-repeat p-5 rounded-lg text-white relative"
        style={{
          backgroundImage: `url(${cardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex items-center gap-3">
          <img
            className="w-[50px] rounded-full border-[1px] border-[yellow]"
            src={props.img}
            alt={props.title}
          />
          <div className="flex flex-col mt-3">
            <h2 className="font-semibold text-white text-xl">{props.title}</h2>
            <div>
            <h5 className="bg-[#05E700] p-1 text-xs text-[green] mt-1 w-[40%] rounded-sm">Executed</h5>
            </div>
          </div>
        </div>
        <div className="my-5 flex flex-col gap-1 text-sm">
          <h5 className="flex justify-between">
            <span>Amount</span> <span className="text-white/80">{props.desc1}</span>
          </h5>
          <h5 className="flex justify-between">
            Ticker <span className="text-white/80">{props.desc2}</span>
          </h5>
          <h5 className="flex justify-between">
            Order <span className="text-white/80">{props.desc3}</span>
          </h5>
          <h5 className="flex justify-between">
            Expected Returns <span className="text-white/80">{props.desc4}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default MyOrderCards;

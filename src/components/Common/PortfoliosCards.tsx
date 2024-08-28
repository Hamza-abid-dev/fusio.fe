import React from 'react';
import { Link } from 'react-router-dom';
import cardBg from '../../assets/images/exploreCardBg.png'; // Ensure this path is correct

// Define the type for the component props
interface PortfoliosCardProps {
  img: string;
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
  status: 'active' | 'inactive'; // or use other appropriate status values
}

const PortfoliosCard: React.FC<PortfoliosCardProps> = (props) => {
  return (
    <div>
      <div
        className="bg-no-repeat p-5 rounded-lg text-white relative"
        style={{
          backgroundImage: `url(${cardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: props.status === 'active' ? 'none' : 'grayscale(100%)',
        }}
      >
        {/* Conditionally render the badge if status is not "active" */}
        {props.status !== 'active' && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs">
            Burned
          </div>
        )}

        <div className="flex items-center gap-3">
          <img
            className="w-[50px] rounded-full border-[1px] border-[yellow]"
            src={props.img}
            alt={props.title}
          />
          <h2 className="font-semibold text-white text-xl">{props.title}</h2>
        </div>
        <div className="my-5 flex flex-col gap-1 text-sm">
          <h5>
            USD Value: <span className="text-white/80">{props.desc1}</span>
          </h5>
          <h5>
            Invested Amount: <span className="text-white/80">{props.desc2}</span>
          </h5>
          <h5>
            Investment Share: <span className="text-white/80">{props.desc3}</span>
          </h5>
        </div>
        <div className="text-sm flex items-center justify-end gap-5">
          <Link to="">Rebalance</Link>
          <Link to="">View</Link>
        </div>
      </div>
    </div>
  );
};

export default PortfoliosCard;

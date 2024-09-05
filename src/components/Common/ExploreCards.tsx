import React from 'react';
import { Link } from 'react-router-dom';
import cardBg from '../../assets/images/exploreCardBg.png'; // Ensure this path is correct
import greenBg from '../../assets/images/greenBg.png'; // Ensure this path is correct

interface ExploreCardProps {
  img: string;
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  bg: string;
}

const ExploreCard: React.FC<ExploreCardProps> = (props) => {
  const titleSlug = props.title; // Convert title to URL-friendly format

  return (
    <Link to={`${titleSlug}`}>
      <div>
        <div className="bg-no-repeat p-5 bg-clip-border rounded-lg text-white/70" style={{ backgroundImage: props.bg =='blue' ? `url(${cardBg})` : `url(${greenBg})` }}>
          <div className="flex items-center gap-3">
            <img className="w-[50px] rounded-full border-[1px] border-[yellow]" src={props.img} alt={props.title} />
            <h2 className="font-semibold text-white text-xl">{props.title}</h2>
          </div>
          <div className="my-3 flex flex-col gap-1 text-sm">
            <h5>{props.desc1}</h5>
            <h5>{props.desc2}</h5>
            <h5>{props.desc3} <i className='fa fa-angle-double-up text-xs bg-[#FFEB38] text-black px-[3px] rounded-full'></i></h5>
            <h5>{props.desc4}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreCard;

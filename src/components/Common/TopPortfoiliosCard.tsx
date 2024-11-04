import { Link } from "react-router-dom";

const Card: React.FC<TopPorfoliosCardProps> = (props) => {
  return (
    <>
    <Link to={`${props.title.replace(' ', '-')}`}>
    <div
        className="relative w-[170px] bg-[#18749D] rounded-md text-center text-white p-4"
      >
        <img
          className="absolute w-[100px] h-[100px] bg-white rounded-[50%] object-contain top-[-55px] left-[50%] transform -translate-x-1/2"
          src={`${props.img}`}
          alt="Portfolio Logo"
        />
        <h1 className="text-lg sm:text-xl mt-10 font-semibold">{props.title}</h1>
        <h5 className="text-xs sm:text-sm my-1">{props.desc}</h5>
      </div>
    </Link>
    </>
  );
};
export default Card;

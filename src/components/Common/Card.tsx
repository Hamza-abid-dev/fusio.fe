const Card: React.FC<CardProps> = (props) => {
	return (
		<div className="card shadow-xl shadow-[#919191] flex w-full bg-white items-center py-2 px-4 flex-wrap rounded-xl justify-between">
		{/* Image Section */}
		<div className="flex items-center">
		<img
		  className={`w-[35px] h-[35px] rounded-xl ${props.title == 'BTCB' ? "bg-[#FFF5D9] py-2 px-3" : ""}`}
		  src={props.img}
		  alt={props.title}
		/>
  
		{/* Text Section */}
		<div className="lg:flex lg:flex-row lg:gap-1 md:flex-col items-center ml-2">
		  <h2 className="text-xs font-semibold">{props.title}</h2>
		  {props.semiTitle && (
			<h5 className="text-black/60 text-xs hidden md:block">
			  {props.semiTitle}
			</h5>
		  )}
		</div>
		</div>
  
		{/* Percentage and Icon Section */}
		<h6
		  className={`text-sm flex items-center gap-2 ${
			props.icon === "arrow-up" ? "text-[#05E700]" : "text-[#D93939]"
		  }`}
		>
		  <span className="font-semibold text-xs">{props.percent}</span>
		  <i className={`fa fa-${props.icon} text-xs font-bold`}></i>
		</h6>
	  </div>
	);
};
export default Card;
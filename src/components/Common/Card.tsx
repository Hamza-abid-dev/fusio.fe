const Card: React.FC<CardProps> = (props) => {
	return (
		<div className="card shadow-xl shadow-[#919191] flex bg-white items-center py-2 px-4 rounded-xl justify-between">
		{/* Image Section */}
		<div className="flex items-center gap-1">
		<img
		  className={`w-[40px] h-[40px] rounded-xl ${props.title == 'BTCB' ? "bg-[#FFF5D9] py-2 px-3" : ""}`}
		  src={props.img}
		  alt={props.title}
		/>
  
		{/* Text Section */}
		<div className="lg:flex lg:flex-row lg:gap-1 md:flex-col items-center ml-2">
		  <h2 className="text-sm font-semibold">{props.title}</h2>
		  {props.semiTitle && (
			<h5 className="text-black/60 text-sm hidden md:block">
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
		  <span className="font-semibold">{props.percent}</span>
		  <i className={`fa fa-${props.icon}`}></i>
		</h6>
	  </div>
	);
};
export default Card;
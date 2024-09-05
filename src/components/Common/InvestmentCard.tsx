const InvestmentCard: React.FC<InvestmentCardProps> = (props) => {
	return (
		<div className="card bg-[#FFFFFF]/50 text-[#FFFFFF] p-4 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
        <h2 className="text-sm mb-2 md:mb-0">{props.title}</h2>
      </div>
        <div className="flex item-center gap-2">
		<div className="flex flex-col items-start md:items-center">
          <h5 className={props.value.startsWith('-') ? 'text-[#D93939]' : 'text-[#00FF47]'}>{props.value}</h5>
          <h5 className="text-sm text-white/80 ml-0">{props.price}</h5>
        </div>
      <button className="mt-2 md:mt-0 py-2 px-4 rounded-md text-white bg-[#00B2FF] w-full md:w-auto">
        View
      </button>
		</div>
    </div>
	);
};
export default InvestmentCard;
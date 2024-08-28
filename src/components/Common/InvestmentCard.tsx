const InvestmentCard = (props: InvestmentCardProps) => {
    const colorClass = props.value.startsWith('-') ? 'text-red-500' : 'text-green-500';
	return (
		<div className="card bg-[#FFFFFF]/50 text-black p-4 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
        <h2 className="text-sm font-semibold mb-2 md:mb-0">{props.title}</h2>
      </div>
        <div className="flex item-center gap-2">
		<div className="flex flex-col items-start md:items-center">
          <h5 className={`text-sm font-semibold ${colorClass}`}>{props.value}</h5>
          <h5 className="text-sm text-black ml-0">{props.price}</h5>
        </div>
      <button className="mt-2 md:mt-0 py-2 px-4 rounded-md text-white bg-[#00B2FF] w-full md:w-auto">
        View
      </button>
		</div>
    </div>
	);
};
export default InvestmentCard;
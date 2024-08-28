const PortfolioCard = (props: PortfolioCardProps) => {
	return (
		<div>
			<div className="card shadow-xl shadow-[#919191] bg-[#18749D] text-white items-center py-3 px-5 rounded-xl justify-between">
				<div>
					<h2 className="text-sm font-semibold">{props.title}</h2>
					<div className="my-1 flex justify-between">
					<h5 className="text-xl">{props.semiTitle}</h5>
					</div>
				</div>
				<h6 className={`text-sm flex items-center gap-2`}>
					<h5 className="md:block sm:hidden">Returns: <span className="text-sm text-white/90">{props.return} USDC</span> </h5><h6 className={`${props.icon == "arrow-up" ? "text-[#05E700]" : "text-[#D93939]"}`}><i className={`fa fa-${props.icon}`}></i> {props.usdc}</h6>
				</h6>
			</div>
		</div>
	);
};

export default PortfolioCard;
 
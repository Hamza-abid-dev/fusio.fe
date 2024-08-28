const ExploreDetailCard = (props: ExploreDetailCardProps) => {
	return (
		<div className="flex items-center bg-[#18749D] p-4 gap-5 text-white font-semibold rounded-xl">
		<div>
			<i className={`${props.img} px-3 py-1 rounded-lg bg-white text-[#18749D] font-bold text-xl`}></i>
		</div>
		<div>
			<h2>{props.title}</h2>
			<h3>{props.desc}</h3>
		</div>
		</div>
	);
};
export default ExploreDetailCard;
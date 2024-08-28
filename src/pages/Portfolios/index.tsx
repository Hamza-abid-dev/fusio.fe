import { PortfolioCard } from "../../components/Common";
import cardlogo1 from '../../assets/images/cardlogo2.png'
const Portfolios = () => {
	return (	
	<>
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 px-4">
  <PortfolioCard img={cardlogo1} title="CryptoFace Fund" desc1="$56.8599" desc2="49.375 USDC" desc3="100%" status="active"/>
  <PortfolioCard img={cardlogo1} title="CryptoFace Fund" desc1="0" desc2="0" desc3="0" status="burned"/>
</div>
	</>
	);
};

export default Portfolios;

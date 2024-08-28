import { WithdrawCard } from "../../components/Common";
import cardlogo1 from '../../assets/images/cardlogo2.png'
const WithdrawRequest = () => {
	return (	
	<>
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 px-4">
  <WithdrawCard img={cardlogo1} title="CryptoFace Fund" desc1="CF" desc2="100%" desc3="56.0184 USDC" desc4="10-07-2024 07:09 PM"/>
</div>
	</>
	);
};

export default WithdrawRequest;

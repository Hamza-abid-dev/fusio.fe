import { MyOrderCards } from "../../components/Common";
import cardlogo1 from '../../assets/images/cardlogo2.png'
const MyOrders = () => {
	return (	
	<>
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 px-4">
  <MyOrderCards img={cardlogo1} title="CryptoFace Fund" desc1="49.375 USDC" desc2="CF" desc3="10-07-2024 07:09 PM" desc4="Moderate"/>
</div>
	</>
	);
};

export default MyOrders;

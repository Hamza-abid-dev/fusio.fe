const Transaction = () => {


  const data = [
    {
      no: 1,
      portfolio: 'Atlantis',
      transection: '0x9d1....7890',
      wallet: '0x43d1....9087',
      amount: '0x43d1....9087',
      transectionFee: '0x43d1....9087',
      date: '2024-08-28',
      action: 'Rebalanced'
    },
    {
      no: 2,
      portfolio: 'Atlantis',
      transection: '0x9d1....7890',
      wallet: '0x43d1....9087',
      amount: '0x43d1....9087',
      transectionFee: '0x43d1....9087',
      date: '2024-08-29',
      action: 'Invest'
    },
    {
      no: 3,
      portfolio: 'Atlantis',
      transection: '0x9d1....7890',
      wallet: '0x43d1....9087',
      amount: '0x43d1....9087',
      transectionFee: '0x43d1....9087',
      date: '2024-08-30',
      action: 'Claimed'
    },
  ]

	return (
		<>
			<div className="overflow-x-auto bg-white h-[500px] shadow-lg rounded-xl mt-12">
  <table className="min-w-full bg-white rounded-lg">
    <thead className="bg-[#18749D] text-white">
      <tr>
        <th className="py-3 lg:px-2 px-1  text-left text-[5px] md:text-[8px]  lg:text-sm font-semibold">Sr No</th>
        <th className="py-3 lg:px-2 px-1  text-left text-[5px] md:text-[8px]  lg:text-sm font-semibold">Portfolio</th>
        <th className="py-3 lg:px-2 px-1  text-left text-[5px] md:text-[8px]  lg:text-sm font-semibold">Transaction Hash</th>
        <th className="py-3 lg:px-2 px-1  text-left text-[5px] md:text-[8px]  lg:text-sm font-semibold">Wallet Address</th>
        <th className="py-3 lg:px-2 px-1  text-left text-[5px] md:text-[8px]  lg:text-sm font-semibold">Amount</th>
        <th className="py-3 lg:px-2 px-1  text-left text-[5px] md:text-[8px]  lg:text-sm font-semibold">Transaction Fees</th>
        <th className="py-3 lg:px-2 px-1  text-left text-[5px] md:text-[8px]  lg:text-sm font-semibold">Date</th>
        <th className="py-3 lg:px-2 px-1  text-left text-[5px] md:text-[8px]  lg:text-sm font-semibold">Action</th>
      </tr>
    </thead>
    <tbody>
      {data.map((x)=>(
        <tr className="border-b border-gray-200">
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">{x.no}</td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">{x.portfolio}</td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">
          {x.transection} <i className="fa fa-chain text-blue-500"></i>
        </td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">
          {x.wallet} <i className="fa fa-clipboard text-blue-500"></i>
        </td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">{x.amount}</td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">{x.transectionFee}</td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">{x.date}</td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">
          <button className="text-[#18749D] font-semibold py-1 lg:px-2 px-1  rounded-md text-[5px]Fee md:text-[8px]  lg:text-sm">
            {x.action}
          </button>
        </td>
      </tr>
      ))}
      {/* Repeat <tr> elements for additional rows */}
    </tbody>
  </table>
</div>



		</>
	);
};

export default Transaction;

const Transaction = () => {
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
      <tr className="border-b border-gray-200">
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">1</td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">Atlantis</td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">
          0x9d1....7890 <i className="fa fa-chain text-blue-500"></i>
        </td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">
          0x9d1....7890 <i className="fa fa-clipboard text-blue-500"></i>
        </td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">0x43d1....9087</td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">0x43d1....9087</td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">0x43d1....9087</td>
        <td className="py-3 lg:px-2 px-1  text-[5px] md:text-[8px]  lg:text-sm border-r">
          <button className="text-[#18749D] font-semibold py-1 lg:px-2 px-1  rounded-md text-[5px] md:text-[8px]  lg:text-sm">
            Invest
          </button>
        </td>
      </tr>
      {/* Repeat <tr> elements for additional rows */}
    </tbody>
  </table>
</div>



		</>
	);
};

export default Transaction;

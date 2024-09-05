import cardBg from "../../assets/images/exploreCardBg.png";
const PortfolioManager = () => {
  return (
    <div className="bg-white/60 shadow-xl rounded-xl p-5 mt-12">
      <div
        className="flex justify-between items-center text-white bg-no-repeat p-5 rounded-xl shadow-md bg-cover"
        style={{
          backgroundImage: `url(${cardBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Portfolio Manager</h2>
            <h2>DAO NFT holders will get upto 40% discount on AUM Fees*</h2>
          </div>
        </div>
      </div>
      <form className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-semibold"
          >
           Investment Amount (USDC)
          </label>
          <input
            type="text"
            id="text"
            className="bg-[#18749D] p-3 rounded-md w-[100%] placeholder:text-white/70"
            placeholder="Enter Amount"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-semibold"
          >
            Search Portfolio
          </label>
          <input
            type="text"
            id="text"
            className="bg-[#18749D] p-3 rounded-md w-[100%] placeholder:text-white/70"
            placeholder="Search Portfolio Name "
            required
          />
        </div>
      </form>
      <div className="my-2">
        <h2>Available Balance: 0</h2>
        <h2>Transaction Fees 2.5% <i className="fa fa-info-circle text-[#18749D] text-sm"></i></h2>
      </div>
        <button className="text-white bg-[#18749D] py-2 px-5 rounded-md mt-10">Submit</button>
    </div>
  );
};

export default PortfolioManager;

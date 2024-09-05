import cardBg from "../../assets/images/exploreCardBg.png";
const PortfolioBuilder = () => {
  return (
    <div className="bg-white/60 shadow-2xl rounded-xl p-5 mt-12">
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
            <h2 className="text-2xl font-semibold">Add Portfolio Builder</h2>
          </div>
        </div>
      </div>
      <form className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-semibold"
          >
            Portfolio Name
          </label>
          <input
            type="text"
            id="text"
            className="bg-[#18749D] p-3 rounded-md w-[100%] placeholder:text-white/70"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 text-lg font-semibold flex items-center gap-1"
          >
            Portfolio Ticker <i className="fa fa-info-circle text-[#18749D] text-sm"></i>
          </label>
          <input
            type="text"
            id="text"
            className="bg-[#18749D] p-3 rounded-md w-[100%] placeholder:text-white/70"
            placeholder="Enter Ticker"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-semibold"
          >
            Expected Returns
          </label>
          <select className="form-select appearance-none bg-[#18749D] p-3 rounded-md w-[100%] text-white/70">
            <option><i className="fa fa-search"></i> Select Expected Returns</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-semibold"
          >
            Search Asset 
          </label>
          <select className="form-select bg-[#18749D] p-3 rounded-md w-[100%]  appearance-none pr-8 pl-2 text-white/70">
            <option> Search Asset Name</option>
          </select>
        </div>
        <div className="mt-10">
          <h2>
          Transaction Fees 4% <i className="fa fa-info-circle text-[#18749D] text-sm"></i>
          </h2>
          <h2>
          Total Asset Allocation 0%
          </h2>
        </div>
      </form>
        <button className="text-white bg-[#18749D] py-2 px-5 rounded-md mt-10">Submit</button>
    </div>
  );
};

export default PortfolioBuilder;

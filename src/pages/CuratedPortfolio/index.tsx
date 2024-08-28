import cardBg from "../../assets/images/exploreCardBg.png";
const CuratedPortfolio = () => {
  return (
    <div className="bg-white/60 shadow-2xl rounded-xl p-5 mt-14">
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
            <h2 className="text-2xl font-semibold">Add Curated Portfolio</h2>
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
            className="block mb-2 text-lg font-semibold"
          >
            Portfolio Ticker
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
          <input
            type="text"
            id="text"
            className="bg-[#18749D] p-3 rounded-md w-[100%] placeholder:text-white/70"
            placeholder="Select Expected Returns"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-semibold"
          >
            Search Asset 
          </label>
          <select className="form-select appearance-none bg-[#18749D] p-3 rounded-md w-[100%] text-white/70">
            <option><i className="fa fa-search"></i> Search Asset Name</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-semibold"
          >
            Transection Fees
          </label>
          <input
            type="text"
            id="text"
            className="bg-[#18749D] p-3 rounded-md w-[100%] placeholder:text-white/70"
            placeholder="Enter Fees"
            required
          />
          <h2 className="mt-2">
          Total Asset Allocation 0%
          </h2>
        </div>
      </form>
        <button className="text-white bg-[#18749D] py-2 px-5 rounded-md mt-10">Submit</button>
    </div>
  );
};

export default CuratedPortfolio;

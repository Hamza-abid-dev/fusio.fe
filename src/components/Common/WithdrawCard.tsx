import React from "react";
import { Link } from "react-router-dom";
import cardBg from "../../assets/images/exploreCardBg.png"; // Ensure this path is correct

const WithdrawCard = (props: MyOrderCardsProps) => {

  return (
    <div>
  <div
    className="bg-no-repeat p-5 rounded-lg text-white relative"
    style={{
        backgroundImage: `url(${cardBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    >
    <div className="flex items-center gap-3">
      <img
        className="w-[50px] rounded-full border-[1px] border-[yellow]"
        src={props.img}
        alt={props.title}
      />
      <div className="flex flex-col mt-3">
      <h2 className="font-semibold text-white text-xl">{props.title}</h2>
      <h5 className="bg-[#05E700] p-1 text-xs text-[green] w-[45%] mt-1 rounded-sm">Executed</h5>
      </div>
    </div>
    <div className="my-5 flex flex-col gap-1 text-sm">
      <h5 className="flex justify-between">
        <h3>Ticker</h3> <span className="text-white/80">{props.desc1}</span>
      </h5>
      <h5 className="flex justify-between">
        Percentage{" "}
        <span className="text-white/80">{props.desc2}</span>
      </h5>
      <h5 className="flex justify-between">
      Claimable Amount{" "}
        <span className="text-white/80">{props.desc3}</span>
      </h5>
      <h5 className="flex justify-between">
      Order Time{" "}
        <span className="text-white/80">{props.desc4}</span>
      </h5>
    </div>
    <div className="flex items-center justify-end gap-4">
      <button className="bg-[#00B2FF] py-1 px-2 rounded-sm">View Transaction</button>
      <button className="bg-[#00B2FF] py-1 px-2 rounded-sm">Claim</button>
    </div>
  </div>
</div>

  );
};

export default WithdrawCard;

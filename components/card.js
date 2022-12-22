/* eslint-disable @next/next/no-img-element */
import React from "react";

const Card = (props) => {
  return (
    <>
      <div>
        <div>
          <img src={props.img} alt="Product Image" />
        </div>
        <div className="flex font-elgocmedium text-[#392e7a] justify-center items-center text-2xl">
          {props.title}
        </div>
        <div className="flex font-elgoc text-[#392e7a] justify-center items-center text-xl">
          {props.region}
        </div>
        <div className="flex font-akkuratlight text-[#606060] justify-center text-center items-center pt-4">
          {props.notes}
        </div>
      </div>
    </>
  );
};
export default Card;

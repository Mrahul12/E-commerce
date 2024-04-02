import React from "react";

const Totalamount = ({ prize, count }) => {
  const totalPrize =Math.round( prize * count);
  return( <p className='text-center text-2xl  text-gray-400'>{`₹ ${totalPrize}`}</p>);
};
export default Totalamount;

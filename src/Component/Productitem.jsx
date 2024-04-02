import React from "react";

const Productitem = ({value,addCard}) => {
  // console.log(value);//! Array(20) [ {…}, {…}, {…},]
  // console.log(addCard); // addToCard Function
  return (
    <>
      {value.map((val, ind) => {
        // console.log(val); //? is an object
        // ? here object destructuring at val
        const {image, rating, title, price} = val;
        return (
        <article key={ind} className='bg-white p-2 rounded-[8px] shadow-[5px_5px_20px] flex flex-col gap-3'>
          <div>
           <img src={image} alt=" Product image" loading='lazy'  className='w-[280px] h-[300px]  object-center'/>
          </div>
          <h2  className='text-1xl font-semibold'>Title : {`${title.slice(0,25)}....`}</h2>
          <section className='flex justify-between px-6'>
           <p className='text-2xl font-semibold'>{`₹ ${price}`}</p>
           <button className='text-1xl font-semibold bg-slate-500 py-1 px-2 rounded shadow-[0px_0px_4px]'>{`⭐${rating.rate}`}</button>
          </section>
          <button className='text-2xl font-semibold bg-green-600 rounded p-2 shadow-[1px_1px_6px]'
          onClick={()=>addCard(val)}>Add To Card</button>
        </article>
        );
      })}
    </>
  );
};
export default Productitem;

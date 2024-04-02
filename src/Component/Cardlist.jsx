import React,{useState} from "react";
import { AiFillHeart } from "react-icons/ai"; // cardView comes from App Component
import Quantity from "./Quantity";

const handleBuy=()=>{
alert('Ufff , we can not buy anything from this website. it make only for practice . Thanks from bottom of my heart  for visit my website')
}
const Cardlist = ({ cardData }) => {
  // console.log(cardData); //? Array [ {…} ]
  return (
    <>
      {cardData.map((item, inds) => {
        // console.log(item);
        // ? here object destructuring at item
        const { image, rating, title, price, size, quantity } = item;
        return (
          <article key={inds} className="bg-white p-5   flex flex-wrap justify-center  gap-5 rounded  shadow-[2px_2px_8px] ">
            <div>
              <img
                src={image}
                alt=" Product image"
                loading="lazy"
                className="w-[150px] h-[200px]  object-center"
              />
            </div>
            <main className="flex flex-col justify-evenly">
              <section className="flex justify-between gap-[50px] ">
                <h2 className="text-1xl text-gray-600 font-semibold">
                  {`${title.slice(0, 21)}....`}
                </h2>
                <p className="text-1xl  text-gray-400 font-semibold">{`₹ ${price}`}</p>
              </section>
              <div className=" rounded p-2 flex justify-between items-center">
                {size.map((sizes, i) => {
                  return (
                    <p className=" border w-9 h-9 text-center text-1xl p-1 rounded cursor-pointer font-semibold border-zinc-500">
                      {sizes}
                    </p>
                  );
                })}
              </div>
            <Quantity price={price}/>
              <div className="flex justify-between">
                <button
                  className="text-1xl font-semibold bg-green-600 rounded px-3 shadow-[1px_1px_3px]"
                  onClick={handleBuy}
                >
                  Buy Now
                </button>
                <button className="text-1xl font-semibold bg-yellow-300 py-1 px-2 rounded shadow-[0px_0px_3px] border-green-100 border">{`⭐${rating.rate}`}</button>
                <button className="text-2xl font-semibold  p-1  rounded shadow-[0px_0px_1px]  text-red-600">
                  <AiFillHeart />
                </button>
              </div>
           
            </main>
          </article>
        );
      })}
    </>
  );
};
export default Cardlist;

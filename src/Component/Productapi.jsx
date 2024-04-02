import React, { useState, useEffect } from "react";
import axios from "axios";
import Productitem from "./Productitem";
import Cardlist from "./Cardlist";
// api of prduct
const API = "https://fakestoreapi.com/products";

const Productapi = ({addToCard,cardView,displayShow}) => {
  // console.log(cardView); //
  // console.log(displayShow); //
  // here addToCard value comes from app for addToCard Event
  // console.log(addToCard); //! function addToCard(item)
  const [product, setProduct] = useState([]);

  // ! Here useEffect hook used for manage with server call
  //! it call instantly at the moment
  //! call api here
  useEffect(() => {
    productCollect(API);
  }, []);

  // ? here recieve api call at url parameter
  // ? Api return promise --> we handle use async & await
  const productCollect = async (url) => {
    try {
      // it take url and retun an object  and all data available inside data array
      const response = await axios.get(url);
      const result = await response.data; // it return array
      if (result.length > 0) {
        setProduct(result);
      }
    } catch (e) {
      console.error("Go and check api : " + e.message);
    }
  };
  return (
    <>
  
      <section className="bg-emerald-300 flex flex-wrap justify-center items-center gap-8 pt-[80px] p-3">
     {
      displayShow?<Cardlist cardData={cardView}/>:
        <Productitem value={product}  addCard={addToCard} />
     }
      </section>
    </>
  );
};
export default Productapi;

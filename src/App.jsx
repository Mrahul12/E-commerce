import React from "react";
import Header from "./Component/Header";
import Productapi from "./Component/Productapi";
import Cardlist from "./Component/Cardlist";
import "./App.css";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [card, setCard] = useState([]);

  // ! handle addTo Card
  const addToCard = (item) => {
    // console.log(item); //when click on addToCard then all data comes here
    const size = ["XS", "S", "M", "L", "XL"];
    setCard([...card, { ...item, size, quantity: 1 }]);
  };

  // handle the display item if click ecommerce then on product
  //  if click card then on card list
  // ! conditionalRender {true,false}--> comes from Header Component if click
  const handleShow = (conditionalRender) => {
    setShow(conditionalRender);
  };

  return (
    <>
      <header>
        <Header handleShow={handleShow} count={card.length} />
        // here we use conditional rendering by ternary operator
        <Productapi addToCard={addToCard} cardView={card}  displayShow={show}/>
      </header>
    </>
  );
}

export default App;

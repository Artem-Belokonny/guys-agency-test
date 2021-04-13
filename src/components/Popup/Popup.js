import React from "react";
import "../Popup/Popup.css";
import propellerSmall from "../../images/propeller-small.svg";
import filter from "../../images/filtr.svg";
import bucket from "../../images/bucket.svg";
import plus from "../../images/plus.svg";
import minus from "../../images/minus.svg";
import Product from "../Product/Product.js";

function Popup({ isOpen, onClose }) {
  const [propellerCount, setPropellerCount] = React.useState(1);
  const [filterCount, setFilterCount] = React.useState(1);

  function increasePropellerCounter() {
    setPropellerCount(propellerCount + 1);
  }

  function decreasePropellerCounter() {
    setPropellerCount(propellerCount - 1);
  }

  function increaseFilterCounter() {
    setFilterCount(filterCount + 1);
  }

  function decreaseFilterCounter() {
    setFilterCount(filterCount - 1);
  }

  return (
    <section className={`${isOpen ? "popup popup_opened" : "popup"}`}>
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__container">
        <p className="popup__title">
          Корзина: <span className="popup__title_price">2 420 &#x20bd;</span>
        </p>
        <Product 
          image={propellerSmall}
          subtitle="Гребной винт 3x7.3x5, Solas, 4011-073-05S"
          price="1 970"
          availability="В наличии"
          bucketImage={bucket}
          plusImage={plus}
          productCount={propellerCount}
          minusImage={minus}
          increaseCounter={increasePropellerCounter}
          decreaseCounter={decreasePropellerCounter}
        />
        <Product 
          image={filter}
          subtitle="Фильтр топливный Fleetguard"
          price="450"
          availability="В наличии"
          bucketImage={bucket}
          plusImage={plus}
          productCount={filterCount}
          minusImage={minus}
          increaseCounter={increaseFilterCounter}
          decreaseCounter={decreaseFilterCounter}
        />
        <button className="popup__button">Перейти в корзину</button>
      </div>
    </section>
  );
}

export default Popup;

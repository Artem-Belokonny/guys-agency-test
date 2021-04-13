import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";
import burger from "../../images/burger.svg";
import w from "../../images/w.svg";
import r from "../../images/r.svg";
import u from "../../images/u.svg";
import m from "../../images/m.svg";
import p from "../../images/p.svg";
import accountBtn from "../../images/account-btn.svg";
import cart from "../../images/cart.svg";

function Navigation({ link = "#" }) {
  return (
    <section className="navigation">
      <div className="navigation__menu">
        <div className="navigation__container">
          <Link to={link} className="navigation__link">
            Доставка
          </Link>
          <Link to={link} className="navigation__link">
            Оплата
          </Link>
          <Link to={link} className="navigation__link">
            Возврат
          </Link>
          <Link to={link} className="navigation__link">
            Магазин
          </Link>
        </div>
        <div className="navigation__contact">
          <p className="navigation__phone-number">+7 495 744-00-50</p>
        </div>
      </div>
      <div className="navigation__search-menu">
        <div className="navigation__logo-container">
          <img src={w} alt="Логотип" className="navigation__logo-image" />
          <img src={r} alt="Логотип" className="navigation__logo-image navigation__logo-image_left" />
          <img src={u} alt="Логотип" className="navigation__logo-image" />
          <img src={m} alt="Логотип" className="navigation__logo-image" />
          <img src={p} alt="Логотип" className="navigation__logo-image" />
        </div>
        <button className="navigation__button">
          <img src={burger} alt="Кнопка" className="navigation__button-image" />
          Каталог
        </button>
        <input
          className="navigation__search-bar"
          type="text"
          name="search"
          id="search"
          placeholder="Поиск по OEM, производителю, модели и категории"
        />
        <img
          src={accountBtn}
          alt="Логотип"
          className="navigation__image"
        />
        <div className="navigation__cart">
          <img src={cart} alt="Логотип" className="navigation__image" />
          <div className="navigation__cart-items">3</div>
        </div>
      </div>
    </section>
  );
}

export default Navigation;

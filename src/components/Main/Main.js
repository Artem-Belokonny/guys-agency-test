import "../Main/Main.css";
import propeller from "../../images/propeller.svg";
import List from "../List/List.js";

function Main({ link = "#", openPopup }) {
  return (
    <section className="main">
      <div className="main__products">
        <p className="main__subtitle">
          Каталог / Запчасти / Двигатель / Винты гребные /{" "}
          <span className="main__subtitle main__subtitle_pale">
            {" "}
            Гребной винт 3x7.3x5, Solas, 4011-073-05S
          </span>
        </p>
      </div>
      <div className="main__title-container">
        <h1 className="main__title">
          Гребной винт 3x7.3x5, Solas, 4011-073-05S
        </h1>
        <h2 className="main__subtitle">Артикул: 401107305S</h2>
      </div>
      <div className="main__product">
        <img className="main__product-image" src={propeller} alt="Товар" />
        <div className="main__product-info">
          <p className="main__text">Модель: 3 лопасти</p>
          <div className="main__buttons-container">
            <button className="main__button main__button_active">
              3 лопасти
            </button>
            <button className="main__button">4 лопасти</button>
          </div>
          <List
            firstItem="OEM"
            secondItem="Производитель техники"
            thirdItem="Бренд"
            fourthItem="Материал"
            firstParameter="3411-135-13"
            secondtParameter="Yamaha"
            thirdParameter="Skipper"
            fourthParameter="Алюминий"
          />
          <div className="main__price-container">
            <p className="main__price">3 940 &#x20bd;</p>
            <p className="main__price-discount">1 970 &#x20bd;</p>
          </div>
          <button
            className="main__button main__button_cart"
            onClick={openPopup}
          >
            В КОРЗИНУ
          </button>
        </div>
      </div>
      <p className="main__text main__text_characteristics">Характеристики</p>
      <div className="main__characteristics_container">
        <List
          firstItem="OEM"
          secondItem="Производитель техники"
          thirdItem="Бренд"
          fourthItem="Количество лопастей"
          fifthItem="Материал"
          firstParameter="3411-135-13"
          secondtParameter="Yamaha"
          thirdParameter="Skipper"
          fourthParameter="3 лопасти"
          fifthParameter="Алюминий"
        />
        <List
          firstItem="Диаметр, дюйм"
          secondItem="Мощность, л.с."
          thirdItem="Шаг, дюйм"
          fourthItem="Тип лодочного мотора"
          fifthItem="Посадка на вал"
          firstParameter="Шлицевая"
          secondtParameter="От 9.9 до 15"
          thirdParameter="11"
          fourthParameter="ПЛМ"
          fifthParameter="Шлицевая"
        />
      </div>
      <p className="main__app-subtitle">Применение</p>
      <div className="main__applying">
        <article className="main__applying_paragraph">
          <p className="main__text main__text_app">4-тактные моторы Suzuki</p>
          <div className="main__links-container">
            <a className="main__link" href={link} alt="Ссылка на товар">
              DF9.9B;
            </a>
            <a className="main__link" href={link} alt="Ссылка на товар">
              DF8A;
            </a>
            <a className="main__link" href={link} alt="Ссылка на товар">
              DF10A
            </a>
          </div>
        </article>
        <article className="main__applying_paragraph">
          <p className="main__text main__text_app">2-тактные моторы Suzuki</p>
          <a className="main__link" href={link} alt="Ссылка на товар">
            DT9.9A;
          </a>
        </article>
      </div>
    </section>
  );
}

export default Main;

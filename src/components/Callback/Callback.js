import React from "react";
import "../Callback/Callback.css";

function Callback({ onFocus, setOnFocus }) {
  const [onNameFocus, setOnNameFocus] = React.useState(false);
  const [onEmailFocus, setOnEmailFocus] = React.useState(false);

  function handleNameInputChange() {
    setOnNameFocus(true);
  }

  function handleNameInputBackChange() {
    setOnNameFocus(false);
  }

  function handleEmailInputChange() {
    setOnEmailFocus(true);
  }

  function handleEmailInputBackChange() {
    setOnEmailFocus(false);
  }

  return (
    <section className="callback">
      <div className="callback__container">
        <h2 className="callback__title">Консультация</h2>
        <p className="callback__subtitle">
          Заполните форму ниже и наш мастер <br></br> свяжется с вами, чтобы ответить на
          ваши вопросы
        </p>
        <form className="callback__form">
          <div className="callback__input-container">
            {onNameFocus ? (
              <p className="callback__subtext callback__subtext_name">Имя</p>
            ) : (<p className="callback__subtext callback__subtext_name"></p>)}
            <input
              className="callback__input"
              type="text"
              name="name"
              required
              placeholder="Имя"
              id="name"
              onInput={handleNameInputChange}
              onBlur={handleNameInputBackChange}
            />
          </div>
          <div className="callback__input-container">
          {onEmailFocus ? (
              <p className="callback__subtext callback__subtext_name">Телефон или e-mail</p>
            ) : (<p className="callback__subtext callback__subtext_name"></p>)}
            <input
              className="callback__input"
              type="text"
              name="email"
              required
              placeholder="Телефон или e-mail"
              id="email"
              onInput={handleEmailInputChange}
              onBlur={handleEmailInputBackChange}
            />
          </div>
        </form>
        <button className="callback__button">Получить консультацию</button>
      </div>
    </section>
  );
}

export default Callback;

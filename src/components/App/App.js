import React from "react";
import "../App/App.css";
import "../../index.css";
import Navigation from "../Navigation/Navigation.js";
import Main from "../Main/Main.js";
import Callback from "../Callback/Callback.js";
import Popup from "../Popup/Popup.js";

function App() {

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function openPopup() {
    setIsPopupOpen(true);
    setTimeout(closePopup, 3000);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className="page">
      <Navigation />
      <Main openPopup={openPopup} />
      <Callback />
      <Popup 
      isOpen={isPopupOpen}
      onClose={closePopup}
      />
    </div>
  );
}

export default App;

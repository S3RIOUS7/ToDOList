import React from "react";

import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";

function App() {
  return (
    <div className="mainContainer">
      <div className="header">
        <Header />
        </div>
      <div className="container">
        <Main />
      </div>
   
    </div>
  );
}

export default App;

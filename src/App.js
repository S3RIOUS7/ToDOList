import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/redux/store'; // Импортируйте ваш Redux store
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";

function App() {
  return (
    <Provider store={store}>
      <div className="mainContainer">
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <Main />
        </div>
      </div>
    </Provider>
  );
}

export default App;

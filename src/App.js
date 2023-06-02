
import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import { AllTasks } from "./hooks/hooks.js";


function App() {

  const [taskMainAll, setTaskMainAll] = useState([]);
  const madeTask = taskMainAll.filter(task => task.checked !== false)

  
  return (
    <AllTasks.Provider value={ [taskMainAll, setTaskMainAll, madeTask] } >
    <div className="mainContainer">

      <div className="header">
        <Header />
        </div>
      <div className="container">
        <Main />
      </div>
   
    </div>
    </AllTasks.Provider>
  );
}

export default App;

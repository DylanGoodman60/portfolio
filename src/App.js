import Navigator from "./components/navigator/Navigator"
import Mainpage from "./components/mainpage/Mainpage"
import "./app.css"
import React, {useState} from 'react';



function App() {
  
  const [show, setShow]=React.useState('home')

  const functions = {
    home: () => {
      setShow('home')
    },
    portfolio: () => {
      setShow('portfolio')
    }
  }

  return (
    <div className="app">
      <Navigator go={functions}/>
      { show==='home' ? <Mainpage />:null }

    </div>
  );
}

export default App;

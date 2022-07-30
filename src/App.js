import Navigator from "./components/navigator/Navigator"
import Mainpage from "./components/mainpage/Mainpage"
import Portfolio from "./components/Portfolio/Portfolio";
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
    },
    bookshelf: () => {
      setShow('bookshelf')
    },
    about: () => {
      setShow('about')
    }
  }

  return (
    <div className="app">
      <Navigator go={functions}/>
      { show==='home' ? <Mainpage />:null }
      <Portfolio lever={show}/>

    </div>
  );
}

export default App;

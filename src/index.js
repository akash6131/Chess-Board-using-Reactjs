import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './App.css';
function Chessboard(){
  return(
     <App/> 
  )  
}
ReactDOM.render(<Chessboard/>,document.getElementById("root"));
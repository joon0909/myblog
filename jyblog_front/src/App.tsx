import './App.scss';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from './pages/Main';
const App:React.FC = ()=>{

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Main />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

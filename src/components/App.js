import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from './Home';
import Revieword from "./Revieword"
const App = () => {
    return (
        <Routes>
        <Route path="/revieword" element={
            <>
              <Revieword />
            </>
          } />
          <Route path="/" element={
            <>
              <Home />
            </>
          } />

        </Routes>
    );
}

export default App;

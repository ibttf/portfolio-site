import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Revieword from "../pages/Revieword";
import BeeLikeCoders from "../pages/BeeLikeCoders";
import Netflixclone from "../pages/Netflixclone";
import GoPlayground from "../pages/GoPlayground";
import TickerBacktest from "../pages/TickerBacktest";
import Bayborhood from "../pages/Bayborhood";
import DVCConnect from "../pages/DVCConnect";
import IsolationIndex from "../pages/IsolationIndex";
import Navbar from "./Navbar";
const App = () => {
  return (
    <Routes>
      <Route
        path="/isolation-index"
        element={
          <>
            <Navbar />
            <IsolationIndex />
          </>
        }
      />
      <Route
        path="/dvc-connect"
        element={
          <>
            <Navbar />
            <DVCConnect />
          </>
        }
      />
      <Route
        path="/revieword"
        element={
          <>
            <Navbar />
            <Revieword />
          </>
        }
      />
      <Route
        path="/bayborhood"
        element={
          <>
            <Navbar />
            <Bayborhood />
          </>
        }
      />
      <Route
        path="/beelikecoders"
        element={
          <>
            <Navbar />
            <BeeLikeCoders />
          </>
        }
      />
      <Route
        path="/ticker-backtest"
        element={
          <>
            <Navbar />
            <TickerBacktest />
          </>
        }
      />
      <Route
        path="/go-playground"
        element={
          <>
            <Navbar />
            <GoPlayground />
          </>
        }
      />
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
    </Routes>
  );
};

export default App;

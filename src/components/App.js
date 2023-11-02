import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BeeLikeCoders from "../pages/BeeLikeCoders";
import GoPlayground from "../pages/GoPlayground";
import Recappd from "../pages/Recappd";
import Bayborhood from "../pages/Bayborhood";
import DVCConnect from "../pages/DVCConnect";
import IsolationIndex from "../pages/IsolationIndex";
import Internio from "../pages/Internio";
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
        path="recappd"
        element={
          <>
            <Navbar />
            <Recappd />
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
        path="/internio"
        element={
          <>
            <Navbar />
            <Internio />
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

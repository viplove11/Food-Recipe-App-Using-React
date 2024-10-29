import { useState } from "react";
import MainPage from "./components/MainPage";
import MealInfo from "./components/MealInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:mealId" element={<MealInfo></MealInfo>}></Route>
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/corporate" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

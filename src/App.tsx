import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import { GlobalStyle } from "./globalStyles";

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;

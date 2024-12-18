import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questionnaire from "./pages/Questionnaire";
import Header from "./components/Header";
import ClientForm from "./components/ClientForm";
import FreelanceForm from "./components/FreelanceForm";
import Error from "./components/Error";
import Freelance from "./pages/Freelances/Freelances";
import Results from "./pages/Results/Results";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Questionnaire/:questionNumber"
          element={<Questionnaire />}
        />
        <Route path="/ClientForm" element={<ClientForm />} />
        <Route path="/FreelanceForm" element={<FreelanceForm />} />
        <Route path="/Freelances" element={<Freelance />} />
        <Route path="/Results" element={<Results />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    <App />
  </React.StrictMode>
);

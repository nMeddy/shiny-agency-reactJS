import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Questionnaire from "./pages/Questionnaire/Questionnaire";
import Header from "./components/Header";
import ClientForm from "./components/ClientForm";
import FreelanceForm from "./components/FreelanceForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Questionnaire" element={<Questionnaire />} />
        <Route path="/ClientForm" element={<ClientForm />} />
        <Route path="/FreelanceForm" element={<FreelanceForm />} />
      </Routes>
    </Router>
    <App />
  </React.StrictMode>
);

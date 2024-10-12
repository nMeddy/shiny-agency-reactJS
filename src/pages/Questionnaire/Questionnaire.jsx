import React from "react";
import { Link, Outlet } from "react-router-dom";

function Questionnaire() {
  // State
  // comportement
  // rendu
  return (
    <div>
      <h1>Questionnaire !</h1>
      <Link to="client">Questionnaire Client !</Link>
      <Link to="Freelance">Questionnaire FreeLance !</Link>
      <Outlet />
    </div>
  );
}

export default Questionnaire;

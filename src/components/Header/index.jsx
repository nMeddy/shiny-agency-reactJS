import React from "react";
import { Link } from "react-router-dom";

function Header(){
    // State
    // Comportement
    // Render
    return <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/questionnaire/1">Questionnaire</Link>
    </nav>
}

export default Header
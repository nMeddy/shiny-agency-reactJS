import React from "react";
import { Link, useParams } from "react-router-dom";

function Questionnaire() {
  // State
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nexQuestionNumber = questionNumberInt + 1;
  // comportement
  // rendu
  return (
    <div>
      <h1>Questionnaire !</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/Questionnaire/${prevQuestionNumber}`}>Précédent</Link>
      {questionNumberInt === 10 ? (
        <Link to="/Results">Résultat</Link>
      ) : (
        <Link to={`/Questionnaire/${nexQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  );
}

export default Questionnaire;

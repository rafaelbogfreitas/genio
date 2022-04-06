import React from "react";
import { useQuestionsContext } from "../../contexts/QuestionsContext";

import pentagram from "../../images/pentagram.svg";
import "./styles.scss";

const Pentagram = () => {
  const { getCurrentQuestion } = useQuestionsContext();
  const degrees = `${getCurrentQuestion().length * 5}deg`;

  const style = {
    transform: `rotate(${degrees})`,
    transition: "transform 0.5s linear",
  };

  return (
    <img className="pentagram" src={pentagram} alt="pentagram" style={style} />
  );
};

export default Pentagram;

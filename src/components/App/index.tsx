import React from 'react';
import QuestionsInput from '../QuestionsInput';

import pentagram from "../../images/pentagram.svg";

import "./index.scss";

const App = () => {
  return (
    <div className="mainContainer">
      <img className="pentagram" src={pentagram} alt="pentagram" />
      <h1 className="title">Gênio</h1>
      <h2 className="subtitle">Pergunte-me algo</h2>
      <QuestionsInput />
    </div>
  )
};

export default App;
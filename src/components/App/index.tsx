import React from 'react';
import QuestionsInput from '../QuestionsInput';

import "./index.scss";

const App = () => {
  return (
    <div className="mainContainer">
      <h1 className="title">Gênio</h1>
      <h2 className="subtitle">Pergunte-me algo</h2>
      <QuestionsInput />
    </div>
  )
};

export default App;
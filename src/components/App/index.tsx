import React from 'react';
import QuestionsContextProvider, { useQuestionsContext } from '../../contexts/QuestionsContext';

import QuestionsInput from '../QuestionsInput';
import Pentagram from '../Pentagram';

import "./index.scss";

const App = () => {
  return (
    <QuestionsContextProvider>
      <div className="mainContainer">
        <Pentagram />
        <h1 className="title">Gênio</h1>
        <h2 className="subtitle">Pergunte-me algo</h2>
        <QuestionsInput />
      </div>
    </QuestionsContextProvider>
  )
};

export default App;
import React, { useState } from 'react'
import { useQuestionsContext } from '../../contexts/QuestionsContext';

import "./styles.scss";

const QuestionsInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const { resetGeneBrain, handleQuestionInput, getSecretAnswer } = useQuestionsContext();

  function revealSecret() {
    setResponse(getSecretAnswer());
  };
  
  function keyPressedHandler(e: any) {
    if(e.key === "Enter") {
      revealSecret();
      resetGeneBrain();
      setInputValue("");
    }
  };

  function handleChange(e: React.FormEvent<HTMLTextAreaElement>) {
    const parsedValue = e.currentTarget.value.replace("\n", "");
    const value = handleQuestionInput(parsedValue);
    setInputValue(value);
  };
  
  return (
    <div className="container">
      <textarea
        autoFocus
        className="questionInput"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={keyPressedHandler}
      ></textarea>
      <div className="responseContainer">
        {response}
      </div>
    </div>
  );
}

export default React.memo(QuestionsInput);
import React, { useState } from 'react'
import GeneBrain from '../../services/GeneBrain';

import "./styles.scss";

const QuestionsInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  function revealSecret() {
    setResponse(GeneBrain.answer);
  };
  
  function keyPressedHandler(e: any) {
    if(e.key === "Enter") {
      revealSecret();
      GeneBrain.reset();
      setInputValue("");
    }
  };

  function handleChange(e: React.FormEvent<HTMLTextAreaElement>) {
    const parsedValue = e.currentTarget.value.replace("\n", "");
    const value = GeneBrain.manageQuestionInput(parsedValue);
    setInputValue(value);
  };
  
  return (
    <div className="container">
      <textarea
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

export default QuestionsInput;
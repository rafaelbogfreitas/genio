import React, { createContext, useContext, useState } from "react";
import GeneBrain from "../services/GeneBrain";

const QuestionsContext = createContext<QuestionProviderValues>(
  {} as QuestionProviderValues
);

export const useQuestionsContext = () => useContext(QuestionsContext);

interface QuestionObject {
  question: string;
  answer: string;
}

interface QuestionProviderValues {
  handleQuestionInput: (questionText: string) => string;
  updateQuestions: (question: QuestionObject) => void;
  clearQuestions: () => void;
  getQuestions: () => QuestionsHistory;
  getCurrentQuestion: () => string;
  getSecretAnswer: () => string;
  resetGeneBrain: () => void;
}

type QuestionsHistory = QuestionObject[];

const QuestionsContextProvider: React.FC = ({ children }) => {
  const [questions, setQuestions] = useState<QuestionsHistory>([]);
  const [currentQuestion, setCurrentQuestion] = useState("");

  function updateQuestions(questionObj: QuestionObject) {
    setQuestions([...questions, questionObj]);
  }

  function clearQuestions() {
    setQuestions([]);
  }

  function getQuestions(): QuestionsHistory {
    return questions;
  }

  function getCurrentQuestion(): string {
    return currentQuestion;
  }

  function handleQuestionInput(questionText: string): string {
    const currentQuestionValue = GeneBrain.manageQuestionInput(questionText);
    setCurrentQuestion(currentQuestionValue);
    return currentQuestionValue;
  }

  function getSecretAnswer(): string {
    return GeneBrain.secretAnswer;
  }

  function resetGeneBrain() {
    setCurrentQuestion("");
    GeneBrain.reset();
  }

  return (
    <QuestionsContext.Provider
      value={{
        handleQuestionInput,
        updateQuestions,
        clearQuestions,
        getQuestions,
        getCurrentQuestion,
        getSecretAnswer,
        resetGeneBrain,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContextProvider;

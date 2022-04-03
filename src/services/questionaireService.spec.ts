/**
 * @jest-environment jsdom
 */

import QuestionaireService from "./QuestionaireService";

describe("Questionaire Service", () => {
  let questionaireService: QuestionaireService;

  const questionWithAnswer = {
    question: "What's your name",
    answer: "Mocker"
  };

  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      configurable: true,
      value: {
        setItem: jest.fn(),
        removeItem: jest.fn(),
      }
    });
  });

  beforeEach(() => {
    questionaireService = new QuestionaireService();
  });

  it("should update the questionaire questions and answers array", () => {
    questionaireService.updateAnswers(questionWithAnswer);

    expect(questionaireService.answers).toStrictEqual([questionWithAnswer]);
  });

  it("should return the answers array", () => {
    const returnedAnswers = questionaireService.updateAnswers(questionWithAnswer);

    expect(returnedAnswers).toStrictEqual([questionWithAnswer]);
  });

  it("should clear the questionaire questions and answers array", () => {
    questionaireService.answers.push(questionWithAnswer);

    questionaireService.clearAnswers();

    expect(questionaireService.answers.length).toEqual(0);
  });

  it("should update the localStorage entry", () => {
    questionaireService.updateAnswers(questionWithAnswer);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      questionaireService.STORAGE_KEY,
      JSON.stringify(questionaireService.answers)
    );
  });
  
  it("should reset the localStorage entry", () => {
    questionaireService.clearAnswers();

    expect(window.localStorage.removeItem).toHaveBeenCalledWith(questionaireService.STORAGE_KEY);
  });
});
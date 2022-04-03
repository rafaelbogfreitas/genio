type QuestionAndAnswer = { question: string, answer: string };

interface AnswersServiceType {
  answers: QuestionAndAnswer[];
  clearAnswers: () => void;
  updateAnswers: (questionAndAnswer: QuestionAndAnswer) => AnswersServiceType['answers'];
}

class QuestionaireService implements AnswersServiceType {
  STORAGE_KEY = "questionaire";
  answers: QuestionAndAnswer[] = [];

  clearAnswers() {
    this.answers = [];
    window.localStorage.removeItem(this.STORAGE_KEY);
  };

  updateAnswers(questionAndAnswer: QuestionAndAnswer):  AnswersServiceType['answers']{
    this.answers.push(questionAndAnswer);
    window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.answers));
    return this.answers;
  }
}

export default QuestionaireService;
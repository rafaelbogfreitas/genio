class GeneBrain {
  private secretAnswer: string = "";
  private displayedValue: string = "";
  private isTypingSecret: boolean = true;
  private geneSentence: string | undefined = undefined;

  private geneIntros = [
    "Grandioso gênio dessa terra",
    "Ó poderoso gênio desse planeta",
  ];

  constructor() {
    this.geneSentence = this.geneIntro;
  }

  get answer(): string {
    return this.secretAnswer;
  }

  private get geneIntro(): string {
    const randomIndex = Math.floor(Math.random() * this.geneIntros.length);
    return this.geneIntros[randomIndex];
  }

  private get hasDeletedChar(): boolean {
    return this.secretAnswer.length < this.displayedValue.length;
  }

  private hasStartedTypingQuestion(text: string): boolean {
    return text.includes(".");
  }

  private getCharInRightGeneSentencePosition(): string {
    return this.geneSentence?.[this.displayedValue.length] ?? "";
  }

  private getTextLastChar(text: string): string {
    return text.split("").pop() ?? "";
  }

  reset() {
    this.secretAnswer = "";
    this.displayedValue = "";
    this.isTypingSecret = true;
    this.geneSentence = this.geneIntro;
  }

  manageQuestionInput(text: string) {
    if(this.isTypingSecret && this.hasStartedTypingQuestion(text)) {
      this.isTypingSecret = false;
      return this.displayedValue;
    }
    
    if(this.isTypingSecret && text) {
      this.secretAnswer = this.secretAnswer + this.getTextLastChar(text);
      this.displayedValue = this.displayedValue + this.getCharInRightGeneSentencePosition();
      return this.displayedValue;
    }

    this.displayedValue = text;
    return this.displayedValue;
  }
};

export default new GeneBrain();
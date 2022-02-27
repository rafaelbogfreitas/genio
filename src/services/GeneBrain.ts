class GeneBrain {
  private _secretAnswer: string = "";
  private _displayedValue: string = "";
  private _isTypingSecret: boolean = true;
  private _geneSentence: string | undefined = undefined;

  private geneIntros = [
    "Grandioso gênio dessa terra",
    "Ó poderoso gênio desse planeta",
  ];

  constructor() {
    this._geneSentence = this.geneIntro;
  }

  get secretAnswer(): string {
    return this._secretAnswer;
  }
  
  private get geneIntro(): string {
    const randomIndex = Math.floor(Math.random() * this.geneIntros.length);
    return this.geneIntros[randomIndex];
  }

  private get hasDeletedChar(): boolean {
    return this.secretAnswer.length < this._displayedValue.length;
  }

  private hasStartedTypingQuestion(text: string): boolean {
    return text.includes(".");
  }

  private getCharInRightGeneSentencePosition(): string {
    return this._geneSentence?.[this._displayedValue.length] ?? "";
  }

  private getTextLastChar(text: string): string {
    return text.split("").pop() ?? "";
  }

  reset() {
    this._secretAnswer = "";
    this._displayedValue = "";
    this._isTypingSecret = true;
    this._geneSentence = this.geneIntro;
  }

  manageQuestionInput(text: string) {
    if(this._isTypingSecret && this.hasStartedTypingQuestion(text)) {
      this._isTypingSecret = false;
      return this._displayedValue;
    }
    
    if(this._isTypingSecret && text) {
      this._secretAnswer = this.secretAnswer + this.getTextLastChar(text);
      this._displayedValue = this._displayedValue + this.getCharInRightGeneSentencePosition();
      return this._displayedValue;
    }

    this._displayedValue = text;
    return this._displayedValue;
  }
};

export default new GeneBrain();
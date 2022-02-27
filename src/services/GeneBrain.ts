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

  private hasDeletedChar(inputText: string): boolean {
    return inputText.length < this._displayedValue.length;
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

  private removeTextLastChar(text: string): string {
    if(!text) {
      return "";
    }

    const textArray = text.split("");
    textArray.pop();

    return textArray.join("");
  }
  
  private handleDelete(inputText: string): { deleted: boolean } {
    if(this._isTypingSecret && this.hasDeletedChar(inputText)) {
      this._displayedValue = this.removeTextLastChar(this._displayedValue);
      this._secretAnswer = this.removeTextLastChar(this._secretAnswer);
      return { deleted: true };
    }
    return { deleted: false };
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
      const { deleted } = this.handleDelete(text);

      if(deleted) {
        return this._displayedValue;
      }

      this._displayedValue = this._displayedValue + this.getCharInRightGeneSentencePosition();
      this._secretAnswer = this.secretAnswer + this.getTextLastChar(text);
      return this._displayedValue;
    }

    this._displayedValue = text;
    return this._displayedValue;
  }
};

export default new GeneBrain();
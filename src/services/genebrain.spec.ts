import GeneBrain from "./GeneBrain";

const simulateTypingInGene = (text: string, simulateDelete: boolean = false): string | undefined => {
  const charArray = [...text];
  let input = "";
  let displayValue;

  for(const char of charArray) {
    input = input + char
    displayValue = GeneBrain.manageQuestionInput(input);
  }
  
  if(simulateDelete) {
    displayValue = GeneBrain.manageQuestionInput(input.substring(0, input.length - 2));
  }

  return displayValue;
};

describe("GeneBrain service", () => {
  beforeEach(() => {
    GeneBrain.reset();
  });

  it("Should update secretAnswer if secret key not typed", () => {
    simulateTypingInGene("My Secret");
    expect(GeneBrain.secretAnswer).toStrictEqual("My Secret");
  });
  
  it("Should not update secretAnswer if secret key is typed", () => {
    simulateTypingInGene("My.Secret");
    expect(GeneBrain.secretAnswer).toStrictEqual("My");
  });
  
  it("Should reset secret", () => {
    simulateTypingInGene("My Secret");
    GeneBrain.reset();
    expect(GeneBrain.secretAnswer).toStrictEqual("");
  });
  
  it("Should handle deletion", () => {
    simulateTypingInGene("My Secret", true);
    expect(GeneBrain.secretAnswer).toStrictEqual("My Secre");
  });
  
  it("Should return an empty string if given an empty string as argument", () => {
    const displayValue = GeneBrain.manageQuestionInput("");
    expect(displayValue).toStrictEqual("");
  });
  
  it("Should return an empty string if delete unique char", () => {
    const displayValue = simulateTypingInGene("", true);
    expect(displayValue).not.toBeUndefined();
    expect(displayValue).toStrictEqual("");
  });
});
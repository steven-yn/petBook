function replaceHash(input: string) {
  if (!input.includes("#")) return input;

  const splitedInput = input.split("#");
  const removeBlank = splitedInput.map((str) => str.trim());
  const joinedInput = removeBlank.join("");

  console.log(splitedInput);
  return joinedInput;
}

function after() {
  return "";
}

export { replaceHash, after };

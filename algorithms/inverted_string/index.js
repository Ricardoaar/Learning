const invertString = (normalString = []) => {
  let sum = 0;
  const len = normalString.length;

  for (let i = 0; i < len / 2; i++) {
    const temp = normalString[i];
    normalString[i] = normalString[len - 1 - i];
    normalString[len - i] = temp;
    sum++;
  }
  console.log({ sum });
  return normalString;
};

const inverStringSolution = (normalString) => {
  let p1 = 0;
  let p2 = normalString.length - 1;
  let sum = 0;
  while (p1 < p2) {
    const temp = normalString[p1];
    normalString[p1] = normalString[p2];
    normalString[p2] = temp;
    p1++;
    p2--;
    sum++;
  }// FASTER
  console.log({ sum });
  return normalString;
};


console.log(invertString(["G", "A", "T", "I", "T", "O", "S"]));
console.log(inverStringSolution(["G", "A", "T", "I", "T", "O", "S"]));
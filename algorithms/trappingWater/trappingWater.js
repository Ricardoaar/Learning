const tests = [
  {
    heights: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
    expected: 6
  }
  // , {
  //   heights: [3, 1, 0, 0, 2, 1, 0, 1],
  //   expected: 4
  // }
];

const trappingWater = (heights) => {
  let higher = 0;
  let accWater = 0;
  let totalWater = 0;
  let distance = 0;

  const waterPerHeight = 0;
  for (let i = 0; i < heights.length; i++) {
    console.log(i);

    const currentHeight = heights[i];


    distance++;

    if (currentHeight >= higher) {
      totalWater += accWater;
      higher = currentHeight;
      accWater = 0;
      distance = 0;
    } else {
      if (accWater > 0 && currentHeight > 0) {

        accWater += higher - currentHeight;
        const waterToAdd = accWater - distance * (higher - currentHeight);
        console.log({ i, waterToAdd, accWater });
        accWater -= waterToAdd;
        totalWater += waterToAdd;
      } else {

        accWater += higher - currentHeight;
      }
    }
    console.log({ accWater, totalWater, distance });
    console.log({ currentHeight, higher });
  }

  return totalWater;
};

tests.forEach(({ heights, expected }) => {
  const result = trappingWater(heights);

  console.log(`Results -> ${result}\nExpected ${expected}\nPass: ${expected === result}`);

});

const tests = [{
  heights: [8, 1, 6, 2, 5, 4, 1, 3, 7],
  expected: 56
}
  , {
    heights: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    expected: 49
  },
  {
    heights: [1, 8, 6, 2, 500, 200, 8, 3, 7, 10],
    expected: 200
  }
];


const maxArea = (heights) => {
  let right = heights.length - 1;
  let left = 0;
  let max = 0;

  for (let i = 0; i < heights.length - 1; i++) {
    const distance = right - left;
    const leftHeight = heights[left];
    const rightHeight = heights[right];
    const maxHeight = Math.min(leftHeight, rightHeight);
    const area = distance * maxHeight;
    max = Math.max(max, area);
    if (leftHeight > rightHeight) right--;
    else left++;
  }
  return max;
};


tests.forEach(({ heights, expected }) => {
  const result = maxArea(heights);
  console.log(`for ${heights} the result is ${result} -> expected: ${expected} -> ${expected === result}`);

});
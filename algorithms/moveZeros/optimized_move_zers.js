let sum = 0;
const moveZeros = (nums) => {
  let p1 = 0;
  for (let p2 = 0; p2 < nums.length; p2++) {
    sum++;
    if (nums[p2] !== 0) {
      const temp = nums[p1];
      nums[p1] = nums[p2];
      nums[p2] = temp;
      p1++;
    }
  }

  return nums;
};

console.log(moveZeros([1, 0, 0, 3, 0, 12, 0, 1, 0, 1, 1, 11]));
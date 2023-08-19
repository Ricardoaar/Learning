const moveZeros = (nums = []) => {
  let sum = 0;

  for (let startPointer = 0; startPointer < nums.length + 1; startPointer++) {
    const current = nums[startPointer];
    const shouldSwap = current === 0;
    sum++;
    if (shouldSwap) {
      let hasSwapped = false;
      for (let swapper = startPointer + 1; swapper < nums.length; swapper++) {
        sum++;
        if (nums[swapper] !== 0) {

          nums[startPointer] = nums[swapper];
          nums[swapper] = 0;
          console.log({ swapper: nums[swapper], swapped: nums[startPointer] });
          hasSwapped = true;

          break;
        }
      }
      if (!hasSwapped) break;

    }

  }
  console.log({ sum });

  return nums;

};


const results = [0, 1, 0, 0, 3, 12, 0, 1, 0];
moveZeros(results);
console.log({ results });



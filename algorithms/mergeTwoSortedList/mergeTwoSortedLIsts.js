const elements = [{
  nums1: [1, 2, 3, 0, 0, 0],
  nums2: [4, 5, 6],
  m: 3,
  n: 3,
  expected: [1, 2, 3, 4, 5, 6]
},
  {
    nums1: [2, 4, 7, 0, 0, 0, 0],
    nums2: [2, 4, 6, 9],
    m: 3,
    n: 4,
    expected: [2, 2, 4, 4, 6, 7, 9]
  }, {
    nums1: [1, 2, 3, 0, 0, 0, 0],
    m: 3,
    nums2: [-4, 2, 3, 9],
    n: 4,
    expected: [-4, 1, 2, 2, 3, 3, 9]
  }
];

const mergeTwoSortedLists = (nums1, nums2, m, n) => {
  const lastIndex = m + n - 1;
  const n1Copy = [...nums1];
  let n1Pointer = m - 1;
  let n2Pointer = n - 1;
  for (let i = lastIndex; i >= 0; i--) {
    const n1Higher = n1Copy[n1Pointer] ?? Number.MIN_SAFE_INTEGER;
    const n2Higher = nums2[n2Pointer] ?? Number.MIN_SAFE_INTEGER;
    if (n1Higher > n2Higher) {
      n1Copy[i] = n1Higher;
      n1Pointer--;
    } else {
      n1Copy[i] = n2Higher;
      n2Pointer--;
    }
  }
  return n1Copy;
};


elements.forEach(({ nums1, nums2, m, n, expected }) => {
  const result = mergeTwoSortedLists(nums1, nums2, m, n);
  const isEqual = result.every((el, idx) => el === expected[idx]) && result.length === expected.length;
  console.log(`For ${nums1} and  ${nums2} -> ${result} ->${isEqual}`);
});

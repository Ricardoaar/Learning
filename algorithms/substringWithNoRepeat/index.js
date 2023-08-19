const lengthOfLongestSubstring = (string) => {
  let lastIndex = 0;
  let sub = new Set(string[lastIndex]);
  let longest = 0;
  for (let i = 1; i < string.length; i++) {
    // console.log({ includes: sub.includes(string[i]), i: string[i], sub, longest });
    if (sub.has(string[i])) {
      const temporalLong = i - lastIndex;
      if (temporalLong > longest) longest = temporalLong;
      lastIndex = i;
      sub = new Set([string[i]]);
      continue;
    }
    sub.add(string[i]);
  }
  return longest;
};

// console.log({ len: lengthOfLongestSubstring("abcabcbb") });
console.log(lengthOfLongestSubstring("abcabcbb") === 3);
console.log(lengthOfLongestSubstring("bbbbb") === 1);
console.log(lengthOfLongestSubstring("pwwkew") === 3);
console.log(lengthOfLongestSubstring("jdkafnlcdsalkxcmpoiuytfccv") === 15);

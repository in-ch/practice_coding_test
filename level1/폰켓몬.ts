function 폰켓몬(nums) {
  return Math.min(nums.length / 2, [...new Set(nums)].length);
}

폰켓몬([3, 3, 3, 2, 2, 2]);

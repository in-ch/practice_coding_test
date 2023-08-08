function solution(nums) {
  return Math.min(nums.length / 2, [...new Set(nums)].length);
}

solution([3, 3, 3, 2, 2, 2]);

/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

*/

// The reasoning here is to check the array backwards

// My solution - very slow beats only 5%
// because it has to write to the validation array every time
function canJump(nums: number[]): boolean {
  let validIndexes = new Array(nums.length).fill(false);
  validIndexes[nums.length - 1] = true;

  for (let i = nums.length - 2; i >= 0; i--) {
    let valid = false;
    for (let j = nums[i]; j >= 0; j--) {
      if (validIndexes[i + j]) {
        valid = true;
        break;
      }
    }
    validIndexes[i] = valid;
  }

  return validIndexes[0];
}

// My solution 2 (Two-pointers) - beats 100%
function canJump(nums: number[]): boolean {
  let lastValid = nums.length - 1;
  let current = nums.length - 2;

  while (current >= 0) {
    if (current + nums[current] >= lastValid) {
      lastValid = current;
    }
    current--;
  }

  return lastValid === 0;
}

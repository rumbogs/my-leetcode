/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // The key thing here is to not be afraid of copying the array first and using it as source
  // for building the new one, otherwise some elements will be overwritten
  let copy = [...nums];
  for (let i = 0; i < nums.length; i++) {
    // get the element that needs to be rotated in this position
    // using the formula (i+k) % nums.length
    nums[(i + k) % nums.length] = copy[i];
  }
}

// Unshift is very slow since it has to move all elements every time O(n * k)
function rotate(nums: number[], k: number): void {
  while (k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
}

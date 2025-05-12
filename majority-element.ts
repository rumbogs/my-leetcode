/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
*/

// Slowest, most memory
function majorityElement(nums: number[]): number {
  nums.sort();
  let count = 0;
  let val = nums[0];
  let lcount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      lcount++;
    }

    if (i === nums.length - 1 || nums[i] !== nums[i - 1]) {
      if (lcount > count) {
        count = lcount;
        val = nums[i - 1];
      }
      lcount = 1;
    }
  }
  return val;
}

// A bit better
function majorityElement(nums: number[]): number {
  let hash = {};
  for (let num of nums) {
    if (typeof hash[num] === "number") {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }

  return Object.keys(hash).reduce(
    (max, k) => (hash[k] >= nums.length / 2 ? parseInt(k, 10) : max),
    0,
  );
}

// Even better, takes into account the fact that when sorted, the element at the middle index is the one that appears
// more than len / 2 times
function majorityElement(nums: number[]): number {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
}

// Boyer-Moore vote majority
// The majority element will be counted the most
function majorityElement(nums: number[]): number {
  let candidate;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
*/

// Slowest, most memory
function majorityElement(nums: number[]): number {
  // Sort so that the majority element is grouped
  nums.sort();
  let count = 0;
  let val = nums[0];
  let lcount = 1;

  for (let i = 1; i < nums.length; i++) {
    // if the last element is the same as this one
    // maybe it's majority so count it
    if (nums[i] === nums[i - 1]) {
      lcount++;
    }

    // if we're at the end or the previous element is not the same
    if (i === nums.length - 1 || nums[i] !== nums[i - 1]) {
      // if the current count is larger than the previous count
      if (lcount > count) {
        // save it
        count = lcount;
        // and assume that the previous element is the majority
        val = nums[i - 1];
      }
      // try again with another count
      lcount = 1;
    }
  }
  return val;
}

// A bit better
function majorityElement(nums: number[]): number {
  // Store a hash of each number and number of times it's in the array
  let hash = {};
  for (let num of nums) {
    if (typeof hash[num] === "number") {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }

  // Find the largest one
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

  // for each value of array
  for (const num of nums) {
    // if we haven't counted it
    // so far assume it's a candidate for majority
    if (count === 0) {
      candidate = num;
    }
    // then if the current num is the same as the candidate
    // increase the count, otherwise decrease it
    //
    // each element is present in the array at least 1 time
    // so its count will be 1, if it's only one, the next time
    // we encounter a different element it will decrease to 0
    // and we try the same logic with that element being candidate
    //
    // the basic idea is that the majority element will always have a
    // count > 0
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

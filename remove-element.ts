/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

// This works when logging the values but not on leetcode for some reason
function removeElement(nums: number[], val: number): number {
  let l = nums.length;
  let i = 0;
  while (typeof nums[i] === "number") {
    if (nums[i] === val) {
      const tmp = nums[nums.length - 1];
      nums[nums.length - 1] = nums[i];
      nums[i] = tmp;
      nums.pop();
    } else {
      i++;
    }
  }
  console.log("nums1", nums);
  console.log("k", l - i);

  return l - i;
}

/**
 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

 Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let j = 0;
  let w = m;
  // This solution is only O(m+n) since it runs through the m+n array only once
  for (let i = 0; i < m + n; i++) {
    // if current index larger than first arrays length
    if (i >= w) {
      // just store the remaining values from the second array
      nums1[i] = nums2[j];
      // and increment the pointer
      j++;
    }
    // if current value is larger than the value from the second array
    if (nums1[i] > nums2[j]) {
      // we move the current value from the first array to the end of it
      nums1[w] = nums1[i];
      // and we store the lowest number from the second array at the current position
      nums1[i] = nums2[j];
      // and we increment the pointer for the second array and for the available
      // positions from the end of the first array
      j++;
      w++;
    }
  }
  // nums1.splice(m, n, ...nums2)
  // nums1.sort()
}

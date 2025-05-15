/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
*/

// Uses a sliding window algorithm where we maintain a left pointer and a right pointer and move
// these around accordingly until we find the minimum subarray
// My solution beats 63%, not best
function minSubArrayLen(target: number, nums: number[]): number {
    let l = 0;
    let r = 0;
    let len = Infinity;
    // Start with the first element
    let sum = nums[0];
    // Stop if the right index gets to the end of the array
    while (r < nums.length) {
        // if current sum is less than target
        if (sum < target) {
            // move the right pointer and add the element's value to the sum
            r++;
            sum += nums[r];
            // if the current sum is more or equal to target
        } else {
            if (r - l + 1 < len) {
                len = r - l + 1;
            }
            l++;
            sum -= nums[l - 1];
        }
    }

    if (len === Infinity) {
        return 0;
    }

    return len;
}

// Prefix Sum + Binary search, slower than the other O(nlogn) (logn because of binary search)
function minSubArrayLen(target: number, nums: number[]): number {
    let len = Infinity;
    // Convert the array into a prefix sum
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }

    // Recursive binary search
    const findTargetIndex = (left, right, num, res) => {
        // Stop condition
        if (left > right) {
            // If we've hit the stop condition and the start of the array
            // It means the length of the subarray has 1 more element to calculate
            // e.g. [1,2,3,4,5] with target 5
            // without this condition we would get 4 as a length
            // but the correct value is 5
            return left === 0 ? res - 1 : res;
        }

        // Take the middle element
        const mid = Math.floor((right + left) / 2);
        // Check if current element - middle element is larger than the target
        const foundTarget = num - nums[mid] >= target;
        if (foundTarget) {
            // if it is, save the new index only if it's larger than current result
            if (res < mid) {
                res = mid;
            }
            // And check the array from the middle to the end
            return findTargetIndex(mid + 1, right, num, res);
        } else {
            // Otherwise, check the first half of the array
            return findTargetIndex(left, mid - 1, num, res);
        }
    };

    for (let i = 0; i < nums.length; i++) {
        // Only check elements larger than the target
        // otherwise we won't be able to hit the target if we
        // subtract values from it
        if (nums[i] >= target) {
            const localLen = i - findTargetIndex(0, i, nums[i], 0);
            // check against the len and update it if we find a
            // smaller subarray
            if (len > localLen) {
                len = localLen;
            }
        }
    }

    return len === Infinity ? 0 : len;
}

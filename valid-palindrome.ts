/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

// My solution - beats 48%, I think regex is slow
// Others use while with some optimisations (like storing the length beforehand)
function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let j = s.length - 1;
    for (let i = 0; i < j; i++) {
        if (s[i] !== s[j]) {
            return false;
        }
        j--;
    }
    return true;
}

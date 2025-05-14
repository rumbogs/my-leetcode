/*
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
*/

// My solution - beats 27%
function hIndex(citations: number[]): number {
  // Sort so that we know that there aren't more citations in previous indexes
  citations.sort((a, b) => a - b);
  let candidate = 0;
  for (let i = 0; i < citations.length; i++) {
    // assume the current citations could be a possible h index
    let possibleH = citations[i];
    let remainingPapers = citations.length - i;
    // the next candidate for h index would be either the element
    // or the remaining papers in array since for h-index papers
    // always need to be equal to citations
    let nextCandidate = Math.min(possibleH, remainingPapers);
    // if this value is larger than the previous candidate
    // save it
    if (candidate < nextCandidate) {
      candidate = nextCandidate;
    }
  }
  return candidate;
}

function hIndex(citations: number[]): number {
  citations.sort((a, b) => a - b);
  for (let i = 0; i < citations.length; i++) {
    let remainingPapers = citations.length - i;
    // It's enough to check if there's a paper that has more citations than there
    // are papers left and return that
    if (citations[i] >= remainingPapers) {
      return remainingPapers;
    }
  }
  return 0;
}

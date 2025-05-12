/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
*/

// My solution - seems fastest (not sure how leetcode calculates, not the same every time I submit)
function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let profit = 0;

  for (let price of prices) {
    const currentProfit = price - minPrice;
    if (currentProfit > 0) {
      profit += currentProfit;
      minPrice = price;
    } else {
      minPrice = Math.min(price, minPrice);
    }
  }

  return profit;
}

// Two-pointer
function maxProfit(prices: number[]): number {
  let b = 0;
  let s = 1;
  let profit = 0;

  while (s < prices.length) {
    let p = prices[s] - prices[b];
    if (p > 0) {
      profit += p;
      b = s;
    } else {
      b++;
    }
    s++;
  }

  return profit;
}

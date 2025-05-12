/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

// My solution which is too slow and times out on large inputs
function maxProfit(prices: number[]): number {
  let profit = 0;
  let buy = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (buy < prices[i]) {
      continue;
    }
    for (let j = i + 1; j < prices.length; j++) {
      const candidate = prices[j] - prices[i];
      if (profit < candidate) {
        profit = candidate;
        buy = prices[i];
      }
    }
  }
  return profit;
}

// Two-pointers solution
// The key here is to also move the buy pointer whenever we encounter a smaller buy value
function maxProfit(prices: number[]): number {
  let profit = 0;
  let buy = 0;
  let sell = 1;

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      const p = prices[sell] - prices[buy];
      if (p > profit) {
        profit = p;
      }
    } else {
      buy = sell;
    }

    sell++;
  }

  return profit;
}

// Dynamic programming
function maxProfit(prices: number[]): number {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;

  for (const currentPrice of prices) {
    minPrice = Math.min(currentPrice, minPrice);
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
  }

  return maxProfit;
}

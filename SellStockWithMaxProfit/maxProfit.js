// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// input prices = [2,5,1],
// output: 3

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


// Brute force method

// ************* will not work for second scenario 
function maxProfitSell(prices){
  let maxProfit = 0;
  let smallest = prices[0];

  for(let i=0; i< prices.length; i++){
    smallest = smallest < prices[i] ? smallest : prices[i];
    maxProfit = maxProfit > prices[i] -smallest ? maxProfit : (prices[i]-smallest)
  }

  return maxProfit;
}

function maxProfitSell(prices){
  let min = prices[0];
  let diff = 0;

  for (let i = 1; i < prices.length; i++) {
    min = min > prices[i] ? prices[i] : min;
    diff = diff < prices[i] - min ? prices[i] - min : diff;
  }

  return diff;
}
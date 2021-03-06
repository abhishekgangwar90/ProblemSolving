// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.


//Input nums = [2,1,1,2];
// output = 4
// Explanation: Rob house 1 (money = 2), rob house 4 (money = 2) 
// Total amount you can rob = 2 + 2 = 4.

var rob = function(nums) {
    let oddSum = 0;
    let evenSum = 0;

    for(let i=0; i<nums.length; i++){
      if(i%2 === 0){
        evenSum = evenSum + nums[i];
      } else{
        oddSum = oddSum + nums[i];
      }
    }

    return Math.max(oddSum, evenSum);
}; 
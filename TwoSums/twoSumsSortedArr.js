// Question - find out pair which makes the target sum in a sorted array of integers.
// sorting increasing order

// Input: numbers = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 0, index2 = 1. We return [0, 1].

// Input: numbers = [2,3,4], target = 6
// Output: [0,2]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 0, index2 = 2. We return [0, 2].


var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length -1;

    if(numbers.length === 0){
      return []
    }

    while(start < end){
      if(numbers[start] + numbers[end] == target){
        return [start, end];
      }
      if(numbers[start] + numbers[end] < target){
        ++start
      }
      if(numbers[start] + numbers[end] > target){
        --end
      }
    }

    return []
};
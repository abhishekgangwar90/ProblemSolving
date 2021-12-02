// Question - find out pair which makes the target sum in array of integers;

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]


function twoSums(nums, target){
  
  let tempObj = {};

  if(!nums || nums.length === 0){
    return []
  }

  for(let i=0; i<nums.length; i++){
    let currentVal = nums[i];
    if(currentVal in tempObj){
      return [tempObj[currentVal], i]
    } else{
      tempObj[target-currentVal]  = i
    }
  }
  return [];
}
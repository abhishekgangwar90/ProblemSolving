
// kadane' algorithm
function maxSum(arr){
  let maxSum = 0;
  let tempSum = 0;

  for(let j=0; j<arr.length; j++){
    tempSum = tempSum + arr[j];
    if(tempSum > maxSum){
      maxSum = tempSum;
    }
    // if temp sum negative means this subarray & subtemp will never increase out maxsum do don't consider it and move on
    if(tempSum<0){
      tempSum=0;
    }
  }
  return maxSum
}
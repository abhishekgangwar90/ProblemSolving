
function AnagramWithTwoLoops(str1, str2){
  if(!str1 || !str2 || str1.length !== str2.length){
  	return false
  }

  let str1Obj = {};
  let str2Obj = {};

// filling values in str1Obj
  for(let char of str1){
    str1Obj[char] =  str1Obj[char] ? str1Obj[char] +1 : 1;
  }


  for(let char of str2){
    // here checking if value of char is already zero
    if(!str1Obj[char]){
      return false
    } else{
      // if not subtract one from the value
      str1Obj[char] = str1Obj[char] - 1;
    }
  }

  return true;
}
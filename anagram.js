function anagram(str1,str2){
  if(!str1 || !str2 || str1.length !== str2.length){
  	return false
  }
  
  const str1Map = new Map();
  const str2Map = new Map();
  
  
  for(let char of str1){
  	if(str1Map.has(char)){
    	str1Map.set(char, (str1Map.get(char) + 1));
 		} else{
       str1Map.set(char,1)
     }
  }

  for(let char of str2){
  	if(str2Map.has(char)){
    	str2Map.set(char, (str2Map.get(char) + 1));
 		} else{
       str2Map.set(char,1)
     }
  }

  for(let [key, value] of str1Map){
    if(!str2Map.has(key) || (str2Map.has(key) && value !== str2Map.get(key))){
      return false
    }
  }

  return true
}
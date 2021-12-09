// [1,2,3,4,5] [4,5,6,2]
// output => [4,5,2]

// [1,2,2,1] [2,2]
// output => [2,2]

// [1,2,3] [3,3]
// output => [3]

// [1,2,2,3] [2,2]
//output => [2,2]
var intersect = function(nums1, nums2) {
    for(let i=0; i<nums1.length; i++){
        let nums2Index = nums2.indexOf(nums1[i]);
        if(nums2Index !== -1){
            nums2.splice(nums2Index,1);
            i--;
        } else{
            nums1.splice(i,1)
        }
        console.log(nums1,nums2);
    }

    return nums1;
};
const arr = [1, 1, 1, 2, 3, 4, 4, 4 ,5 ,5 , 6, 6, 7];

var removeDuplicates = function(nums) {
        let i = 0;

        
        for(let j = 1; j < nums.length; j++){
            if(nums[i] !== nums[j]){
                    i++
                nums[i] = nums[j]
            }
        }
        return i + 1

};

 const result = removeDuplicates(arr)
 
  console.log(result)






 

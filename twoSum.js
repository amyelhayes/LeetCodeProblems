const bruteForceTwoSum = (nums, target)=>  {
    let result = [];
  
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          result.push(i);
          result.push(j);
        }
      }
    }
    return result;
  };
  console.log(bruteForceTwoSum([2, 5, 4, 1, 7], 3));
  // Output [ 0, 3 ]


  //----------------------------------Solution 2-----------------------------------------------

  const improvedTwoSum = (nums, target) => {

    let hash = {};

    for(let i = 0; i < nums.length; i++) {
        if(hash[target-nums[i]] != undefined) {
            return [hash[target-nums[i]], i]
        }
        hash[nums[i]] = i
    }
  }

console.log(improvedTwoSum([2, 5, 4, 1, 7], 3));
// Output [0,3]

  //----------------------------------Solution 3-----------------------------------------------
  

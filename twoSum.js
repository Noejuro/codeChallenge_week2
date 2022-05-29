let twoSum = function(nums, target) {
    for(let index = 0; index < nums.length; index++) {
        let diff = target - nums[index];
        let secondIndex = nums.indexOf(diff);
        if(secondIndex !== -1 && secondIndex !== index) {
            return [index, secondIndex]
        }
    }

    return [];
};

module.exports = twoSum
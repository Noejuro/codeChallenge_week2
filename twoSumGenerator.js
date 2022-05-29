function* twoSumGenerator(nums, target) {
    for(let firstIndex = 0; firstIndex < nums.length - 1; firstIndex++ ) {
        for(let secondIndex = firstIndex + 1; secondIndex < nums.length; secondIndex++) {
            if(nums[firstIndex] + nums[secondIndex] === target) {
                yield [firstIndex, secondIndex]
            }
        }
    }
};

module.exports = twoSumGenerator;
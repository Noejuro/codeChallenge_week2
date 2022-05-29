describe('Testing TwoSumGenerator Function', () => {
    const twoSumGenerator = require('../twoSumGenerator')

    describe('Numbers as [1, 2, 3, 4, 5] ', () => {
        const arr = [1, 2, 3, 4, 5];

        it('Target = 6, should return [[0,4],[1,3]]', () => {
            const target = 6;
            
            const result = [];

            for(const val of twoSumGenerator(arr, target)) {
                result.push(val)
            }
    
            expect(result).toEqual([[0,4],[1,3]]);
        })

        it('Target = 7, should return [[1,4],[2,3]]', () => {
            const target = 7;
            
            const result = [];

            for(const val of twoSumGenerator(arr, target)) {
                result.push(val)
            }
    
            expect(result).toEqual([[1,4],[2,3]]);
        })

        it('Target = 3, should return [[0,1]]', () => {
            const target = 3;
            
            const result = [];

            for(const val of twoSumGenerator(arr, target)) {
                result.push(val)
            }
    
            expect(result).toEqual([[0,1]]);
        })

        it('Target = 10, should return []', () => {
            const target = 10;
            
            const result = [];

            for(const val of twoSumGenerator(arr, target)) {
                result.push(val)
            }
    
            expect(result).toEqual([]);
        })

        it('Target = 1, should return []', () => {
            const target = 1;
            
            const result = [];

            for(const val of twoSumGenerator(arr, target)) {
                result.push(val)
            }
    
            expect(result).toEqual([]);
        })

    })


    describe('Numbers as [7, 10, 5, 2, 15, 3, 1, 3] ', () => {
        const arr = [7, 10, 5, 2, 15, 3, 1, 3];

        it('Target = 15, should return [[1,2]]', () => {
            const target = 15;
            
            const result = [];

            for(const val of twoSumGenerator(arr, target)) {
                result.push(val)
            }
    
            expect(result).toEqual([[1,2]]);
        })

        it('Target = 6, should return [[2,6],[5,7]]', () => {
            const target = 6;
            
            const result = [];

            for(const val of twoSumGenerator(arr, target)) {
                result.push(val)
            }
    
            expect(result).toEqual([[2,6],[5,7]]);
        })

        it('Target = 8, should return [[0,3], [2,5], [2,7]]', () => {
            const target = 8;
            
            const result = [];

            for(const val of twoSumGenerator(arr, target)) {
                result.push(val)
            }
    
            expect(result).toEqual([[0,6], [2,5], [2,7]]);
        })

        it('Target = 14, should return []', () => {
            const target = 14;
            
            const result = [];

            for(const val of twoSumGenerator(arr, target)) {
                result.push(val)
            }
    
            expect(result).toEqual([]);
        })

        it('Target = 1, should return []', () => {
            const target = 1;
            
            const result = [];

            for(const val of twoSumGenerator(arr, target)) {
                result.push(val)
            }
    
            expect(result).toEqual([]);
        })

    })
})
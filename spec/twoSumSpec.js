describe('Testing TwoSum Function', () => {
    const sum = require('../twoSum')

    describe('Numbers as [1, 2, 3, 4, 5] ', () => {
        const arr = [1, 2, 3, 4, 5];

        it('Target = 6, should return [1,3]', () => {
            const target = 6;
            
            const result = sum(arr, target);
    
            expect(result).toEqual([0,4]);
        })

        it('Target = 4, should return [0,2]', () => {
            const target = 4;
            
            const result = sum(arr, target);
    
            expect(result).toEqual([0,2]);
        })

        it('Target = 9, should return [3,4]', () => {
            const target = 9;
            
            const result = sum(arr, target);
    
            expect(result).toEqual([3,4]);
        })

        it('Target = 10, should return []', () => {
            const target = 10;
            
            const result = sum(arr, target);
    
            expect(result).toEqual([]);
        })

        it('Target = 0, should return []', () => {
            const target = 0;
            
            const result = sum(arr, target);
    
            expect(result).toEqual([]);
        })

    })

    describe('Numbers as [7, 10, 5, 2, 15] ', () => {
        const arr = [7, 10, 5, 2, 15];

        it('Target = 15, should return [1,2]', () => {
            const target = 15;
            
            const result = sum(arr, target);
    
            expect(result).toEqual([1,2]);
        })

        it('Target = 9, should return [0,3]', () => {
            const target = 9;
            
            const result = sum(arr, target);
    
            expect(result).toEqual([0,3]);
        })

        it('Target = 7, should return [2,3]', () => {
            const target = 7;
            
            const result = sum(arr, target);
    
            expect(result).toEqual([2,3]);
        })

        it('Target = 25, should return []', () => {
            const target = 25;
            
            const result = sum(arr, target);
    
            expect(result).toEqual([1,4]);
        })

        it('Target = 26, should return []', () => {
            const target = 26;
            
            const result = sum(arr, target);
    
            expect(result).toEqual([]);
        })

    })
})
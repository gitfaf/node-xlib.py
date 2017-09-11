const zip = require('./zip')

describe('zip', () => {
    it('zips [0, 1, 2, 3] and ["a", "b", "c", "d"] successfully', () => {
        const listA = [0, 1, 2, 3]
        const listB = ["a", "b", "c", "d"]
        let i = 0;
        let zippedElements = 0;
        for (let { key, value } of zip(listA, listB)) {
            expect(key).toBe(listA[i])
            expect(value).toBe(listB[i])
            i++
            zippedElements++
        }
        expect(i).toBe(4)
        expect(listA[i]).toBe(undefined)
        expect(listB[i]).toBe(undefined)
        expect(zippedElements).toBe(4)
    })
    describe('unsymmetric zip', () => {
        it('zips [0, 1] with ["a", "b", "c", "d"] successfully', () => {
            const listA = [0, 1]
            const listB = ["a", "b", "c", "d"]
            let i = 0;
            let zippedElements = 0;
            for (let { key, value } of zip(listA, listB)) {
                expect(key).toBe(listA[i])
                expect(value).toBe(listB[i])
                i++
                zippedElements++
            }
            expect(i).toBe(2)
            expect(listA[i]).toBe(undefined)
            expect(listB[i]).toBe('c') // this list didn't get zipped completely
            expect(zippedElements).toBe(2)
        })
    })
})

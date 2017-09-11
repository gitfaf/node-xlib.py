const lib = require('./zip')

describe('zip', () => {
    it('zips [0, 1, 2, 3] and ["a", "b", "c", "d"] successfully', () => {
        const listA = [0, 1, 2, 3]
        const listB = ["a", "b", "c", "d"]
        let i = 0;
        let zippedElements = 0;
        for (let out of lib.zip(listA, listB)) {
            expect(out[0]).toBe(listA[i])
            expect(out[1]).toBe(listB[i])
            i++
            zippedElements++
        }
        expect(i).toBe(4)
        expect(listA[i]).toBe(undefined)
        expect(listB[i]).toBe(undefined)
        expect(zippedElements).toBe(4)
    })
    it('zips [0, 1], [2 3], ["a", "b"], and ["c", "d"] successfully', () => {
        const listA = [0, 1]
        const listB = [2, 3]
        const listC = ["a", "b"]
        const listD = ["c", "d"]
        let i = 0;
        let zippedElements = 0;
        for (let out of lib.zip(listA, listB, listC, listD)) {
            expect(out[0]).toBe(listA[i])
            expect(out[1]).toBe(listB[i])
            expect(out[2]).toBe(listC[i])
            expect(out[3]).toBe(listD[i])
            i++
            zippedElements++
        }
        expect(i).toBe(2)
        expect(listA[i]).toBe(undefined)
        expect(listB[i]).toBe(undefined)
        expect(zippedElements).toBe(2)
    })
    describe('unsymmetric zip', () => {
        it('zips [0, 1] and ["a", "b", "c", "d"] successfully', () => {
            const listA = [0, 1]
            const listB = ["a", "b", "c", "d"]
            let i = 0;
            let zippedElements = 0;
            for (let out of lib.zip(listA, listB)) {
                expect(out[0]).toBe(listA[i])
                expect(out[1]).toBe(listB[i])
                i++
                zippedElements++
            }
            expect(i).toBe(2)
            expect(listA[i]).toBe(undefined)
            expect(listB[i]).toBe('c') // this list didn't get zipped completely
            expect(zippedElements).toBe(2)
        })
        it('zips [0, 1], [2, 3, 4], and ["a", "b", "c", "d"] successfully', () => {
            const listA = [0, 1]
            const listB = [2, 3, 4]
            const listC = ["a", "b", "c", "d"]
            let i = 0;
            let zippedElements = 0;
            for (let out of lib.zip(listA, listB, listC)) {
                expect(out[0]).toBe(listA[i])
                expect(out[1]).toBe(listB[i])
                expect(out[2]).toBe(listC[i])
                i++
                zippedElements++
            }
            expect(i).toBe(2)
            expect(listA[i]).toBe(undefined)
            expect(listB[i]).toBe(4)
            expect(listC[i]).toBe("c")
            expect(zippedElements).toBe(2)
        })
    })
})


describe('xzip', () => {
    it('xzips [0, 1, 2, 3] and ["a", "b", "c", "d"] successfully', () => {
        const listA = [0, 1, 2, 3]
        const listB = ["a", "b", "c", "d"]
        let i = 0;
        let zippedElements = 0;
        for (let out of lib.xzip(listA, listB)) {
            expect(out[0]).toBe(listA[i])
            expect(out[1]).toBe(listB[i])
            i++
            zippedElements++
        }
        expect(i).toBe(4)
        expect(listA[i]).toBe(undefined)
        expect(listB[i]).toBe(undefined)
        expect(zippedElements).toBe(4)
    })
    it('xzips [0, 1], [2 3], ["a", "b"], and ["c", "d"] successfully', () => {
        const listA = [0, 1]
        const listB = [2, 3]
        const listC = ["a", "b"]
        const listD = ["c", "d"]
        let i = 0;
        let zippedElements = 0;
        for (let out of lib.xzip(listA, listB, listC, listD)) {
            expect(out[0]).toBe(listA[i])
            expect(out[1]).toBe(listB[i])
            expect(out[2]).toBe(listC[i])
            expect(out[3]).toBe(listD[i])
            i++
            zippedElements++
        }
        expect(i).toBe(2)
        expect(listA[i]).toBe(undefined)
        expect(listB[i]).toBe(undefined)
        expect(zippedElements).toBe(2)
    })
    describe('unsymmetric zip', () => {
        it('xzips [0, 1] and ["a", "b", "c", "d"] successfully', () => {
            const listA = [0, 1]
            const listB = ["a", "b", "c", "d"]
            let i = 0;
            let zippedElements = 0;
            for (let out of lib.xzip(listA, listB)) {
                if (i > 1) {
                    expect(out[0]).toBeUndefined()
                }
                expect(out[0]).toBe(listA[i])
                expect(out[1]).toBe(listB[i])
                i++
                zippedElements++
            }
            expect(i).toBe(4)
            expect(listA[i]).toBe(undefined)
            expect(listB[i]).toBe(undefined)
            expect(zippedElements).toBe(4)
        })
        it('xzips [0, 1], [2, 3, 4], and ["a", "b", "c", "d"] successfully', () => {
            const listA = [0, 1]
            const listB = [2, 3, 4]
            const listC = ["a", "b", "c", "d"]
            let i = 0;
            let zippedElements = 0;
            for (let out of lib.xzip(listA, listB, listC)) {
                if (i > 1) {
                    expect(out[0]).toBeUndefined()
                }
                if (i > 2) {
                    expect(out[1]).toBeUndefined()
                }
                expect(out[0]).toBe(listA[i])
                expect(out[1]).toBe(listB[i])
                expect(out[2]).toBe(listC[i])
                i++
                zippedElements++

            }
            expect(i).toBe(4)
            expect(listA[i]).toBe(undefined)
            expect(listB[i]).toBe(undefined)
            expect(listC[i]).toBe(undefined)
            expect(zippedElements).toBe(4)
        })
    })
})

describe('zip with deconstruction', () => {
    it('[1, 2, 3] and [5, 6, 7]', () => {
        let i = 0
        const A = [1, 2, 3]
        const B = [5, 6, 7]
        for (let out of lib.zip(A, B)) {
            let [key, value] = out
            expect(key).toBe(A[i])
            expect(value).toBe(B[i])
            i++
        }
    })
})

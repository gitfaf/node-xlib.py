function* zip(listA, listB) {
    let lenA = listA.length
    let lenB = listB.length
    let len = Math.min(lenA, lenB)
    for (let i = 0; i < len; i++) {
        yield {
            key: listA[i],
            value: listB[i]
        }
    }
}

module.exports = zip
/**
 * zip zips list as python's zip would
 * @example:
 * for (let out in zip([1, 2], [3, 4], [5, 6])) {
 *     console.log(out[0], out[1], out[2])
 * }
 * prints
 * 1, 3, 5
 * 2, 4, 6
 * @return yields tuple/object of zipped lists
 * @params list of lists/vectors
 */
function* zip(...lists) {
    let lengths = lists.map(list => list.length)
    let minLen = Math.min.apply(null, lengths)
    for(let i = 0; i < minLen; i++) {
        let level = []
        for(let l = 0, llen = lists.length; l < llen; l++) {
            level.push(lists[l][i])
        }
        yield level
    }
}

/**
 * xzip - zips lists by keeping longest list in mind.
 * Returns object containing undefined if have to.
 * @params list of lists/vectors.
 * @return yields tuples/objects with list until longest list has elements to zip.
 */
function * xzip(...lists) {
    let lengths = lists.map(list => list.length)
    let maxLen = Math.max.apply(null, lengths)
    for(let i = 0; i < maxLen; i++) {
        let level = []
        for(let l = 0, llen = lists.length; l < llen; l++) {
            level.push(lists[l][i])
        }
        yield level
    }
}

module.exports = {
    zip,
    xzip
}

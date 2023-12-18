/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const letterStore = {}
    let sum = 0
    word1 = word1.join('')
    word2 = word2.join('')
    if ( word1.length !== word2.length ) return false
    len = word1.length
    for (let pos=0; pos<len; pos++) {
        if (letterStore[word1[pos]] === undefined) {
            letterStore[word1[pos]] = 0
        } else {
            if (letterStore[word1[pos]] < 0) {
                sum++
            }
        }
        letterStore[word1[pos]]++
        if (letterStore[word2[pos]] === undefined) {
            letterStore[word2[pos]] = 0
        } else {
            if (letterStore[word2[pos]] > 0) {
                sum++
            }
        }
        letterStore[word2[pos]]--
    }
    return (sum === len)
};
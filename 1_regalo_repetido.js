/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
    const uniqueGifts = [...new Set(gifts)]
    uniqueGifts.sort((a, b) => a - b)
    return uniqueGifts
}
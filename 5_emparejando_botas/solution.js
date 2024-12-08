/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    const counts = {};

    shoes.forEach(shoe => {
        const { type, size } = shoe
        if (!counts[size]) {
            counts[size] = { I: 0, R: 0 }
        }
        counts[size][type]++
    })

    const pairs = []

    Object.keys(counts).forEach(size => {
        const { I, R } = counts[size]
        const pairCount = Math.min(I, R)
        for (let i = 0; i < pairCount; i++) {
            pairs.push(parseInt(size))
        }
    })

    return pairs
}
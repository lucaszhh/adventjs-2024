/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let race = []
    
    for (let i = 0; i < indices.length; i++) {
        let track = ' '.repeat(indices.length - i - 1) + '~'.repeat(length)
        let position = indices[i] >= 0 ? indices[i] : length + indices[i]
        if (indices[i] !== 0) {
            track = track.substring(0, position + indices.length - i - 1) + 'r' + track.substring(position + indices.length - i)
        }
        race.push(track + ` /${i + 1}`)
    }
    
    return race.join('\n')
}
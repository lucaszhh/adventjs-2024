/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    if (names.length === 0) return ''
    const maxLength = Math.max(...names.map(name => name.length))
    const border = '*'.repeat(maxLength + 4)
    const framedNames = names.map(name => `* ${name.padEnd(maxLength, ' ')} *`).join('\n')
    return `${border}\n${framedNames}\n${border}`
}
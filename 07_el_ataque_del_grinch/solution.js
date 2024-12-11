/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    let stack = []
    
    for (let char of packages) {
        if (char === ')') {
            let temp = ''
            while (stack.length && stack[stack.length - 1] !== '(') {
                temp += stack.pop()
            }
            stack.pop()
            for (let reversedChar of temp) {
                stack.push(reversedChar)
            }
        } else {
            stack.push(char)
        }
    }
    
    return stack.join('')
}
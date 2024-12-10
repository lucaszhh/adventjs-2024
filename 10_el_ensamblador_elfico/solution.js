/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
    const registers = {}

    function getValue(x) {
        if (isNaN(x)) {
            return registers[x] || 0
        }
        return parseInt(x, 10)
    }

    let i = 0
    while (i < instructions.length) {
        const [cmd, x, y] = instructions[i].split(' ')

        switch (cmd) {
            case 'MOV':
                registers[y] = getValue(x)
                break
            case 'INC':
                registers[x] = (registers[x] || 0) + 1
                break
            case 'DEC':
                registers[x] = (registers[x] || 0) - 1
                break
            case 'JMP':
                if (getValue(x) === 0) {
                    i = getValue(y) - 1 // -1 porque el bucle incrementará i
                }
                break
        }
        i++
    }

    return registers['A']
}
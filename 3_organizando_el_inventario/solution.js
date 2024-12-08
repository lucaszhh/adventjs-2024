/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    const organized = {}
    inventory.forEach(item => {
        const { name, quantity, category } = item
        if (!organized[category]) {
            organized[category] = {}
        }
        if (!organized[category][name]) {
            organized[category][name] = 0
        }
        organized[category][name] += quantity
    })
    return organized
}
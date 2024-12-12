/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    return inventory.reduce((organized, item) => {
        const { name, quantity, category } = item;
        organized[category] ??= {};
        organized[category][name] = (organized[category][name] ?? 0) + quantity;
        return organized;
    }, {});
}
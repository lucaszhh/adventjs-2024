/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    const counts = new Map();

    // Contar pares disponibles de cada tamaño
    shoes.forEach(({ type, size }) => {
        if (!counts.has(size)) counts.set(size, { I: 0, R: 0 });
        counts.get(size)[type]++;
    });

    // Obtener los tamaños con pares disponibles
    return [...counts.entries()].flatMap(([size, { I, R }]) => 
        Array(Math.min(I, R)).fill(size)
    );
}

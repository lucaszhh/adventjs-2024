/**
 * @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    const values = {
      '*': 1,
      'o': 5,
      '^': 10,
      '#': 50,
      '@': 100
    }
  
    let price = 0
    let prevValue = 0
  
    for (let letter of ornaments) {
      const currentValue = values[letter] 
      if (currentValue === undefined) {
        return undefined; 
      }
      currentValue > prevValue ? 
        price += currentValue - 2 * prevValue 
        :
        price += currentValue
      prevValue = currentValue
    }
  
    return price 
  }
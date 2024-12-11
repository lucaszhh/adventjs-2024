/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */

function decodeFilename(filename) {
    return filename.split("_", -1)
      .slice(1)
      .join("_") 
      .split(".")
      .slice(0,2)
      .join(".")
}
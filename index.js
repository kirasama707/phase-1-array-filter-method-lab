function findMatching(Drivers, string) {
    const foundMatch = Drivers.filter((drivers) => {
        if (string.toUpperCase() === drivers.toUpperCase()) {
            return true
        }
    })
    return foundMatch
}
const fuzzyMatch = (arr, string) => {
   const foundMatch = arr.filter((letters) => {
    if (string.charAt(0, 2) === letters.charAt(0, 2)) {
        return true 
    }
   })
   return foundMatch
}
function matchName(driver, string) {
    return driver.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}
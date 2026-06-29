const lengthInput = document.getElementById('length')
const widthInput = document.getElementById('width')
const heightInput = document.getElementById('height')
const doorsWindowsInput = document.getElementById('doorsWindows')
const coatsInput = document.getElementById('coats')
const coverageInput = document.getElementById('coverage')
const pricePerLiterInput = document.getElementById('pricePerLiter') 

const paintableAreaOutput = document.getElementById('paintableArea')
const paintNeededOutput = document.getElementById('paintNeeded')
const totalCostOutput = document.getElementById('totalCost')
const messageOutput = document.getElementById('message')

const estimateButton = document.getElementById('estimateBtn')
const resetButton = document.getElementById('resetBtn')

estimateButton.addEventListener('click', function(e){
    e.preventDefault()
    calculate()
})

resetButton.addEventListener('click', function(){
    lengthInput.value = ''
    widthInput.value = ''
    heightInput.value = ''
    doorsWindowsInput.value = ''

    coatsInput.value = ''
    coverageInput.value = ''
    pricePerLiterInput.value = ''

    // Clear outputs
    paintableAreaOutput.textContent = '-'
    paintNeededOutput.textContent = '-'
    totalCostOutput.textContent = '-'
    messageOutput.textContent = 'Your inputs have been reset. Please enter new values to get an estimate.'
})

function getNumberValue(inputElement){
    return parseFloat(inputElement.value)
}

function calculate(){
    const length = getNumberValue(lengthInput)
    const width = getNumberValue(widthInput)
    const height = getNumberValue(heightInput)
    const doorsWindows = getNumberValue(doorsWindowsInput)
    const coats = getNumberValue(coatsInput)
    const coverage = getNumberValue(coverageInput)
    const pricePerLiter = getNumberValue(pricePerLiterInput)

    // Caution: coverage cannot be 0 because paint needed uses division.
    if(
        !isFinite(length) || !isFinite(width) || !isFinite(height) ||
        !isFinite(doorsWindows) || !isFinite(coats) || !isFinite(coverage) ||
        !isFinite(pricePerLiter)
    ){
        messageOutput.textContent = 'Please enter valid numeric values in all fields.'
        return
    }

    if(length <= 0 || width <= 0 || height <= 0 || coats <= 0 || coverage <= 0 || pricePerLiter <= 0){
        messageOutput.textContent = 'Please enter values greater than zero for length, width, height, coats, coverage, and price.'
        return
    }

    if(doorsWindows < 0){
        messageOutput.textContent = 'Doors/windows area cannot be negative.'
        return
    }

    const roomPerimeter = 2 * (length + width)
    const wallArea = roomPerimeter * height

    // Caution: always check the excluded area before calculating paint needed.
    if(doorsWindows > wallArea){
        messageOutput.textContent = 'Doors/windows area cannot be greater than the total wall area.'
        return
    }

    const paintableArea = wallArea - doorsWindows
    const paintNeeded = (paintableArea * coats) / coverage
    const totalCost = paintNeeded * pricePerLiter

    paintableAreaOutput.textContent = paintableArea.toFixed(2) + ' square units'
    paintNeededOutput.textContent = paintNeeded.toFixed(2) + ' liters'
    totalCostOutput.textContent = '$' + totalCost.toFixed(2)
    messageOutput.textContent = 'Your paint cost estimate has been calculated successfully.'
}
const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("leangth-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    const baseValue = inputEl.value

    const metter = Number(baseValue * meterToFeet).toFixed(3)
    const feet  = Number(baseValue / meterToFeet).toFixed(3)
    lengthEl.textContent = `${baseValue} meter = ${metter} feet | ${baseValue} feet = ${feet} meters`

    const liters = Number(baseValue * literToGallon).toFixed(3)
    const gallons = Number(baseValue / literToGallon).toFixed(3)
    volumeEl.textContent = `${baseValue} liters = ${liters} gallons | ${baseValue} gallons = ${gallons} liters` 

    const kilos = Number(baseValue * kiloToPound).toFixed(3)
    const pounds = Number(baseValue / kiloToPound).toFixed(3)
    massEl.textContent = `${baseValue} kilos = ${kilos} pounds | ${baseValue} pounds = ${pounds} kilos`
})

let fuelUsage = '0'
let distance = 0
let priceOfFuel = '0'
let passengers = 0
let weight = 0

const calcBtn = document.querySelector('.calc-btn')
const resetBtn = document.querySelector('.reset-btn')
const calcOfTravel = document.querySelector('calc-of-travel');

const resautlContent = document.querySelector('.resault')


//wywołanie
function generateRaport(e) {
    e.preventDefault();
    fuelUsage = document.getElementById('fuel-usage').value
    distance = document.getElementById('distance').value
    priceOfFuel = document.getElementById('fuel-price').value
    passengers = document.getElementById('passengers').value
    weight = document.getElementById('weight').value

    fuelUsage = Number(fuelUsage.replace(',','.'))
    priceOfFuel = Number(priceOfFuel.replace(',','.'))

//obliczenia
    const priceOfOneKm = fuelUsage/100*priceOfFuel
    const burnedOfDistance = fuelUsage/100*distance
    const priceOfDistance = priceOfOneKm*distance
    const weightOfPassenger = passengers*weight/100*0.6/100 *priceOfFuel*distance
    const allExpenceOfJourney = (weightOfPassenger+priceOfDistance).toFixed(2)
    const priceForOnePerson = allExpenceOfJourney/++passengers

    resautlContent.innerHTML = `
    <h3>Raport z obliczeń:</h3>
    <p>Koszt za 1km: ${priceOfOneKm.toFixed(2)} zł</p>
    <p>Spalone paliwo na dystansie ${distance} km: ${burnedOfDistance.toFixed(2)} L</p>
    <p>Koszt podróży: ${priceOfDistance.toFixed(2)} zł</p>
    <p>Dodatkowy koszt za ciężar ${weight} kg: ${weightOfPassenger.toFixed(2)} zł</p>
    <p>Całkowity koszt podróży: ${allExpenceOfJourney} zł</p>
    <p>Koszt na jedną osobę z kierowcą: ${priceForOnePerson.toFixed(2)} zł</p>`
    
    resautlContent.animate([
        { opacity: '0'},
        {opacity: '1'}
    ], {
        duration: 400,
        fill: 'both',
        // timing: 'easy-in-out'
        // iterations:,
    })

    //wywołanie w konsoli
    

    // console.log(`Koszt za 1km: ${priceOfOneKm.toFixed(2)} zł
    // Spalone paliwo na dystansie ${distance} km: ${burnedOfDistance.toFixed(2)}
    // Koszt podróży: ${priceOfDistance.toFixed(2)}
    // Dodatkowy koszt za ciężar ${weight} kg: ${weightOfPassenger.toFixed(2)}
    // Całkowity koszt podróży: ${allExpenceOfJourney}
    // Koszt na jedną osobę z kierowcą: ${priceForOnePerson.toFixed(2)}`)
}

let fuelUsage12 = document.getElementById('fuel-usage')

// function resetCalc() {
//     fuelUsage12.type = 'reset'
    
// }

calcBtn.addEventListener('click', generateRaport)
// resetBtn.addEventListener('click', resetCalc)



const hoursWorked = document.getElementById('hours');
const weeksWorked = document.getElementById('weeks');
const averageRate = document.getElementById('avgrate');
const taxRate = document.getElementById('rate');


function projectedIncome(){
    const z = hoursWorked.value * weeksWorked.value
    // if(averageRate.value > 0){
    //     return(averageRate.value * z)
    if(hoursWorked.value <= 20){
        return(z * 71.4)
    }else if(hoursWorked.value> 20 && hoursWorked.value <= 27){
        return(z * 77.35);
    }else if(hoursWorked.value> 27){
        return(z * 83.3);
    }
}

console.log(projectedIncome())

const includeTaxes = function() {
    const earnings = (projectedIncome() * (1 - taxRate.value))
    document.querySelector('#income').innerText = earnings.toFixed(2)
}

document.querySelector('#submit').addEventListener('click', includeTaxes)

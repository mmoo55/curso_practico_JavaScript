function convertAPYToAPR(APYPercent, compoundFrequency){
    let numberOfTimes;
    let APR;
    let APY = APYPercent / 100;
    
    // APR = raiz12 ((APY + 1) (n^n)) -n

    if (compoundFrequency == "daily") {
        numberOfTimes = 365;
    } else if (compoundFrequency == "weekly") {
        numberOfTimes = 365 / 7;
    } else if (compoundFrequency == "monthly") {
        numberOfTimes = 365 / 30;
    } else if (compoundFrequency == "quarterly") {
        numberOfTimes = 365 / 12 * 3;
    } else if (compoundFrequency == "half-yearly") {
        numberOfTimes = 365 / 2;
    } else { /* if (compoundFrequency == "yearly") */
        numberOfTimes = 365 / 365;
    }

    APR = Math.pow((APY+1)*(Math.pow(numberOfTimes, numberOfTimes)), 1 / numberOfTimes) - numberOfTimes;
    
    const APRPercent = APR * 100;

    return APRPercent;
}

function amount(apy, term, initialBalance) {
    const APYDay = apy / 365;
    const APYTotalDays = APYDay * term;
    
    const calculateFinalBlance = (APYTotalDays / 100) * initialBalance;

    return Number(initialBalance) + Number(calculateFinalBlance);
}


function calculateAPY() {
    const inputInterest = document.getElementById("inputInterest");
    const valueInterest = inputInterest.value;

    const inputCompoundFrequency = document.getElementById("compoundFrequency");
    const valueCompoundFrequency = inputCompoundFrequency.value;

    const inputAPY = document.getElementById("inputAPY");
    const valueAPY = inputAPY.value;

    const inputTerm = document.getElementById("inputTerm");
    const valueTerm = inputTerm.value;

    const inputInitialBalance = document.getElementById("inputInitialBalance");
    const valueInitialBalance = inputInitialBalance.value;

    const ResultAmount = amount(valueAPY, valueTerm, valueInitialBalance);

    const resultAmount = document.getElementById("amount");
    resultAmount.innerText = `${ResultAmount} $`

    const ResultInteres = convertAPYToAPR(valueAPY, valueCompoundFrequency);
    /* console.log(ResultInteres); */
}

// Ejemplo Calculando APR con APY y compoundFrequency mensual
// APY + 1 = (12+APR/12)^12 ==== APY+1 = (12+APR)^12/12^12

// (APY + 1)(12^12) = (12+APR)^12

// raiz12 (APY + 1)(12^12)    -12 = APR

// APR = raiz12 ((APY + 1) (n^n)) -n



// APY
// 5.09/12 = 0.42
// 5.09/365 = 0.41835

// 26.1/12 = 2.175
// 26.1/365= 2.145


// APR
// 4.97/12 = 0.4141
// 4.97/365 = 0.4084

// 23.42/12 = 1.95
// 23.42/365= 1.92


function compute()
{
    const principal = document.getElementById("principal").value;

    if (!principal || principal && parseInt(principal) < 1) {
        alert("Enter a positive number for principal.")
        return
    }
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    if (!years || years && parseInt(years) < 1) {
        alert("Enter a positive number for years.")
        return
    }
    const result = document.getElementById("result");

    let x = ((rate * principal) / 100) * years;
    const d = new Date();
    let currentYear = d.getFullYear();
    const year = parseInt(years) + currentYear;


    let textResult = `If you deposit <span class="highlight">${principal}</span>,</br>
        at an interest rate of <span class="highlight">${rate}%</span>.</br>
        You will receive an amount of <span class="highlight">${x}</span>,</br>
        in the year <span class="highlight">${year}</span>
    `

    result.innerHTML = textResult;

    
}
        

function updateRateValueInput(val) {
    document.getElementById('rateValue').innerHTML=val+"%"; 
}

document.addEventListener('DOMContentLoaded', () => {

    function generateYearsOption() {
        const years = document.getElementById("years");
        for (let i = 1; i<=100; i++){
            let opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            years.appendChild(opt);
        }
    
    }
    
    generateYearsOption();

});

// https://www.omnicalculator.com/finance/reserve-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const reserveratioRadio = document.getElementById('reserveratioRadio');
const depositsRadio = document.getElementById('depositsRadio');
const reservesRadio = document.getElementById('reservesRadio');

let reserveratio;
let deposits = v1;
let reserves = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

reserveratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Deposits';
  variable2.textContent = 'Reserves';
  deposits = v1;
  reserves = v2;
  result.textContent = '';
});

depositsRadio.addEventListener('click', function() {
  variable1.textContent = 'Reserve ratio';
  variable2.textContent = 'Reserves';
  reserveratio = v1;
  reserves = v2;
  result.textContent = '';
});

reservesRadio.addEventListener('click', function() {
  variable1.textContent = 'Reserve ratio';
  variable2.textContent = 'Deposits';
  reserveratio = v1;
  deposits = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(reserveratioRadio.checked)
    result.textContent = `Reserve ratio = ${computereserveratio().toFixed(2)}`;

  else if(depositsRadio.checked)
    result.textContent = `Deposits = ${computedeposits().toFixed(2)}`;

  else if(reservesRadio.checked)
    result.textContent = `Reserves = ${computereserves().toFixed(2)}`;
})

// calculation

function computereserveratio() {
  return (Number(reserves.value) / Number(deposits.value)) * 100;
}

function computedeposits() {
  return Number(reserves.value) / (Number(reserveratio.value) / 100);
}

function computereserves() {
  return Number(deposits.value) * (Number(reserveratio.value) / 100);
}
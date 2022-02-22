const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');

const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');

const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');

const splitsElement = document.getElementById('splits');

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  console.log(chronometer.getSeconds());
  secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  //chronometer.currentTime;
}

function printSplit() {
  splitsElement.innerText = chronometer.split();
}



function clearSplits() {
  
}

function setStopBtn() {
 
}


function setSplitBtn() {
  chronometer.split();
}

function setStartBtn() {

}

function setResetBtn() {
  
  chronometer.rest()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeftElement.innerText == 'START'){
    chronometer.start(printTime);
    btnLeftElement.className = 'btn stop';
    btnLeftElement.innerText = 'STOP';
  }else{
    chronometer.stop();
    btnLeftElement.innerText == 'STOP';
    btnLeftElement.className = 'btn start';
    btnLeftElement.innerText = 'START';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.innerText == 'RESET'){
    btnRightElement.className = 'btn split';
    btnRightElement.innerText = 'SPLIT';
    
  }else{
    btnRightElement.innerText ='SPLIT';
    btnRightElement.className = 'btn reset';
    btnRightElement.innerText = 'RESET';
    printSplit();
  }
});


/*  
  if(btnRightElement.innerText == 'SPLIT'){
    btnRightElement.className = 'btn reset';
    btnRightElement.innerText = 'RESET';
  }else{
    btnRightElement.innerText = 'RESET';
    btnRightElement.className = 'btn split';
    btnRightElement.innerText = 'SPLIT';
    printSplit()
  }
  */
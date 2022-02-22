class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() =>{
      this.currentTime +=1
      callback()
      return this.currentTime;
    }, 1000);
  }

  getMinutes() {
    if(this.currentTime === 0){
      return 0;
    }else{
      let minutes = Math.floor((this.currentTime)/60);
      return minutes;
    }
  }

  getSeconds() {
    // ... your code goes here
    if(this.currentTime === 0){
      return 0;
    }else{
      let seconds = Number(Math.floor(this.currentTime) % 60);
      return seconds;
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return String("0" + value).slice(-2);
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes(this.currentTime));
    let seconds = this.computeTwoDigitNumber(this.getSeconds(this.currentTime));
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

console.log(Chronometer.currentTime)
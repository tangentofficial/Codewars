
function highAndLow(numbers){

  var set = numbers.split(' ').reduce((a, i) => {
    if (a.low === null || parseInt(i) < a.low) {
      a.low = i;
    }
    if (a.high === null || parseInt(i) > a.high) {
      a.high = i;
    }
    console.log(a)
    return a;
  }, {high: null, low: null});

  return `${set.high} ${set.low}`;

}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'))

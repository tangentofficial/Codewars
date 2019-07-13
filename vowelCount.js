
function getCount(str){

  return str.split('').reduce((a, i) => {
    if ('aeiou'.indexOf(i) > -1) a += 1;
    return a;
  }, 0);

}

console.log(getCount("abracadabra"));

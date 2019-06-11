
function spinWords(str){
  return str.split(' ').map(s => {
    return s.length >= 5 ? s.split('').reverse().join('') : s;
  }).join(' ');
}

console.log(spinWords("Seriously this is the last one"));

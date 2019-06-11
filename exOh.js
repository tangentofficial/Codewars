
function XO(str){
  if (str.split('').filter(i => i.toLowerCase() == 'x').length === str.split('').filter(i => i.toLowerCase() == 'o').length) {
    return true
  } else {
    return false;
  }
}

console.log(XO('xo'));
console.log(XO('xxOo'));
console.log(XO('xxxm'));
console.log(XO('Oo'));
console.log(XO('ooom'));


function maskify(cc){
  return cc.substr(0, cc.length - 4).split('').map(i =>{return i = '#'}).join('') + cc.substr(cc.length - 4, cc.length);
}

console.log(maskify('4556364607935616'));


function accum(str){
  return str.split('').map(s => {
    if (str.split('').indexOf(s) === 0) {
      return s;
    } else {
      return '-' + addNumOf(str.split('').indexOf(s), s);
    }
  });
  function addNumOf(index, let){
    var retStr = let.toUpperCase();
    while (retStr.length < index + 1) {
      retStr += let.toLowerCase();
    }
    return retStr;
  }
}

console.log(accum('RqaEzty'));

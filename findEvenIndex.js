
function findEvenIndex(arr){

  var counter = 0;

  var red = arr.reduce((a, i) => {
    var pre = arr.filter(r => arr.indexOf(r) < arr.indexOf(i));
    var pro = arr.filter(r => arr.indexOf(r) > arr.indexOf(i));
    console.log(counter, {pre: pre, pro: pro});
    return a;
  }, -1);

  function total(frag){
    return frag.reduce((x, y) => {
      x += y;
      return x;
    }, 0)
  }

}

console.log(findEvenIndex([1,2,3,4,3,2,1]));

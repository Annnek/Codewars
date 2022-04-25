//You're a square! 7kyu
var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n)); 
   }

   //Round up to the next multiple of 5. 7kyu
   function roundToNext5(n){
    if (n === 0 || (n < 0 && n > -5)) {
      return 0;
    } else if (n % 5 === 0) {
      return n;
    } else {
      return (((Math.floor(n / 5)) + 1) *5);
    }
    // ...
  }

  //Mumbling. 7kyu
  function accum(s) {
    // your code
    let str = s[0].toUpperCase();
    for (let i = 1; i < s.length; i++) {
      str += "-" + s[i].toUpperCase();
      for (let j = 0; j < i; j++) {
        str += s[i].toLowerCase();
      }
    }
    console.log(str);
    return str;
  }
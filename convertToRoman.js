// function convertToRoman(num) {
//     let numString = num.toString()
//     let numRoman = ''
//     for(let i = 0; i < numString.length; i++) {
//         if(numString.length == 4) {
//             numString[0] != 0 ? numRoman.repeat(numString[0], )
//         }
//     }



//     console.log(numString)

//     return num;
//    }
   
// convertToRoman(36);

function romanize(num) {
    var numberRoman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    , number = '',i;
    for ( i in numberRoman ) {
      console.log(num)

      while ( num >= numberRoman[i] ) {
        // console.log(i)
        number += i;
        num -= numberRoman[i];
        // console.log(num)
      }
    }
    console.log(number);
  }

  romanize(1520);
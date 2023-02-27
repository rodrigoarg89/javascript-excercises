const countOperationByFor = (array) => {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    
    for(let i = 0; i < array.length; i++) {
        count1++
        for(let j = 0; j < array.length; j++) {
          count2++;
          for(let k = 0; k < array.length; k++) {
            count3++;
          }
        }
      }
    if(count3 == count1) {
      console.log('O(n)')
    }
    else if(count3 == count1*count1) {
      console.log('O(n^2)')
    }
    else if(count3 == count1*count1*count1) {
      console.log('O(n^3)')
    }
    else if(count3 > count1*count1*count1) {
      console.log('O(n!)')
    } else {
      console.log('O(1)')
    }
    console.log(count1)
    console.log(count2)
    console.log(count3)
  }
  countOperationByFor([1, 5, 4, 5, 5, 6]);
  
  // O(f((n^2));
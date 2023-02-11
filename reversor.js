// function reverse(list, start, end) {
//     const startList = list.slice(0, start);
//     const endList = list.slice(end + 1);
//     const sublist = list.slice(start, end+1);
//     const reversedSublist = sublist.reverse();

//     return [...startList, ...reversedSublist, ...endList];
// }

// /* const list = [4,2,1,3];
// const result = reverse(list, 0, 2);
// console.log(result); */

// function findMinIndex(list, start) {
//     let minValue = list[start];
//     let indexMinValue = start;

//     for (let i = start; i < list.length; i++) {
//         if (list[i] < minValue) {
//             minValue = list[i];
//             indexMinValue = i;
//         }
//     }
//     console.log(indexMinValue);
// }

// /* const list = [3, 1, 4, 5, 2, 3];
// findMinIndex(list, 0); */

// // eontrar el elemento mas pequeño a partir de la posicion i 
// function reverseSort(list) {
//     for(let i = 0; i < list.length; i++) {
//         const j = findMinIndex(list, i);
//         reverse(list, i, j)
//         console.log(j) //2

//     }

// }

// const list = [4, 2, 1, 3];
// // [1, 2, 4, 3]

// reverseSort(list);



function reverse(list, start, end) {
    const startList = list.slice(0, start);
    const endList = list.slice(end + 1);
    const sublist = list.slice(start, end+1);
    const reversedSublist = sublist.reverse();

    return [...startList, ...reversedSublist, ...endList];
}

function findMinIndex(list, start) {
    let minValue = list[start];
    let indexMinValue = start;

    for (let i = start; i < list.length; i++) {
        if (list[i] < minValue) {
            minValue = list[i];
            indexMinValue = i;
        }
    }
    return indexMinValue;
    // console.log(indexMinValue);
}


function reverseSort(list) {
    let cost = 0;
    for (let i = 0; i < list.length -1 ; i++) {
        // j−i+1
        const j = findMinIndex(list, i);
        list = reverse(list, i, j);
        let reverseCost = j - i + 1;
        console.log(reverseCost);
        cost += reverseCost;
    }
    console.log(cost);
}

const list = [4, 2, 1, 3];
// [1, 2, 4, 3]
reverseSort((list));
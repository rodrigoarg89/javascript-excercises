const list = [0, 1, 2, 3, 4, 5]

let newList = []; 

// function reverseList(list, start, end) {
//     let newListB = list.slice(end+1, list.length)
//     const newListA = list.slice(start, end-start+1).reverse()

//     newList = [...newListA, ...newListB];
//     console.log(newList)
    
// }

function reverseList(list, start, end) {
    const newListA = [...list.slice(start, end+1).reverse(), ...list.slice(0, start), ...list.slice(end+1)]
    console.log(newListA)
}




reverseList(list, 3, 4)

// Función que encuentre el índice del número más pequeño en un subconjunto de una lista
// el método recibe:
// 1. La lista
// 2. El índice del inicio del subconjunto
// Nota, el subconjunto es desde el índice de inicio hasta el final de la lista

function findMin(list, start) {
    
}
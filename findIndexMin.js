// Función que encuentre el índice del número más pequeño en un subconjunto de una lista 
// el método recibe: 
// 1. La lista // 2. El índice del inicio del subconjunto 
// Nota, el subconjunto es desde el índice de inicio hasta el final de la lista  
// La función debe de retornar el índice del elemento más pequeño que se haya encontrado en la sublista, este índice 
// debe de ser él índice que corresponde al elemento en la lista completa 
// en el ejemplo siguiente deben de retornar 4 function findMin(list, start) {  }  const list2 = [3, 1, 5, 4, 2, 8]; findMin(list2, 2);

function findIndexMin(list, start) {
    for(let i = start; i <= list.length; i++) {
        if(list[i] < list[i+1]) {
            console.log(i)
        }
    }

} 

findIndexMin([3, 1, 5, 4, 2, 1, 7], 2);
let listSheep = ["Noah, blue"," Euge, red","Ki Na Ma, red"]

function numberNameColorOfSheep(listSheep) {
    let counterBlue = 0;
    let counterRed = 0;
    let blueSeep = '';
    let redSheep = '';
    console.log(listSheep.map(sheep => {
        if(sheep.includes('blue')) {
            counterBlue++;
            blueSeep = sheep
            
        } else if(sheep.includes('red')) {
            counterRed++
            redSheep = sheep
        }

     } ))
     console.log(`la cantidad de ovejas azules es ${counterBlue}, siendo: ${blueSeep}`)

     console.log(`la cantidad de ovejas rojas es ${counterRed}, siendo; ${redSheep}`)
        
}

numberNameColorOfSheep(listSheep)
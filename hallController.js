import{ Conveyor } from './Conveyor.js'
import { drawParcel, generateParcel } from './conveyorController.js';
import { drawTruck, handleDrop } from './truckController.js';

export function addNewConveyor(hall){
    let conveyor = new Conveyor();
    conveyor.id = hall.id + '-' +(hall.conveyors.length + 1);
    generateParcel(conveyor);
    hall.addConveyor(conveyor);
    loadHall(true);
}

function generateConveyorDiv(conveyor){
    let div = document.createElement('div');
    div.id = 'conveyor:' + conveyor.id;
    div.className = 'conveyor';
    document.getElementById('conveyors').append(div);
    return div;
}

// export function addTruckFromQueue(hall){
//     if(!canAddTruck(hall)){
//         return;
//     }
//     hall.truck = truckQueue.shift();

//     drawTruck(hall.truck);
// }

export function switchHall(){
    let tempHall = window.currentHall;
    window.currentHall = window.otherHall;
    window.otherHall = tempHall;
    loadHall();
}

function emptyHall(){
    let truckDiv = document.getElementsByClassName('truck-div');
    while(truckDiv.length > 0) {
        truckDiv[0].remove()
    }
    document.getElementById('conveyors').replaceChildren();
    
}

export function loadHall(shouldGenerateParcel = false){
    console.log('loadHall: ' + currentHall.id);
    emptyHall();
    let conveyors = currentHall.conveyors;
    conveyors.forEach(conveyor => {
        let conveyorDiv = generateConveyorDiv(conveyor);
        conveyorDiv.append(drawParcel(conveyor.parcel, conveyorDiv.id.split(':')[1]));
    });
    if(currentHall.truck){
        drawTruck(currentHall.truck);
    }
    
}

function canAddTruck(hall){
    if(truckQueue.length < 1){
        window.alert('No more trucks to add');
        return false;
    }
    if(hall.truck){
        window.alert('Already a truck in the hall');
        return false;
    }
    return true;
}
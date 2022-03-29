import{ Conveyor } from './Conveyor.js'
import { clearParcel, generateParcel } from './conveyorController.js';
import { drawTruck, handleDrop } from './truckController.js';

export function addNewConveyor(hall){
    let conveyor = new Conveyor();
    let div = document.createElement('div');
    div.id = 'conveyor-' + (hall.conveyors.length + 1);
    conveyor.id = hall.conveyors.length + 1;
    div.className = 'conveyor';
    document.getElementById('conveyors').append(div);
    generateParcel(div, conveyor);

    hall.addConveyor(conveyor);
}

export function addTruckFromQueue(hall, trucks){
    if(!canAddTruck(hall, trucks)){
        return;
    }
    hall.truck = trucks.shift();
    let truckDiv = document.createElement('div');
    truckDiv.className = 'truck-div dropzone';
    document.getElementById('truck').append(truckDiv);
    
    truckDiv.addEventListener('drop', (e) =>{
        e.preventDefault();
        let heldCell = handleDrop(e)
        if (heldCell) {
            let conveyorDiv = heldCell.parentElement.parentElement.parentElement;
            let conveyor = hall.conveyors[hall.conveyors.findIndex(conveyor => {
                if (conveyor.id == conveyorDiv.id.split('-')[1]) {
                    return true;
                }
                return false;
            })];
            
            generateParcel(conveyorDiv, conveyor);
        }
    });

    truckDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
        //TODO: showPreview();
    });

    drawTruck(hall.truck, truckDiv);
}

export function switchHall(currentHall){
    let tempHall = currentHall;
    currentHall = otherHall;
    otherHall = tempHall;
    loadHall(currentHall);
}

export function loadHall(currentHall){
    
}

function canAddTruck(hall, trucks){
    if(trucks.length < 1){
        window.alert('No more trucks to add');
        return false;
    }
    if(hall.truck){
        window.alert('Already a truck in the hall');
        return false;
    }
    return true;
}
import{ Conveyor } from './Conveyor.js'
import { clearParcel, generateParcel } from './conveyorController.js';
import { drawTruck, handleDrop } from './truckController.js';

export function addNewConveyor(hall){
    let div = document.createElement('div');
    div.id = 'conveyor-' + (hall.conveyors.length + 1);
    div.className = 'conveyor';
    document.getElementById('conveyors').append(div);
    generateParcel(div);

    hall.addConveyor();
}

export function addTruckFromQueue(hall, trucks){
    hall.truck = trucks.shift();
    let truckDiv = document.createElement('div');
    truckDiv.className = 'truck-div dropzone';
    document.getElementById('truck').append(truckDiv);
    
    truckDiv.addEventListener('drop', (e) =>{
        e.preventDefault();
        let heldCell = handleDrop(e)
        if (heldCell) {
            let conveyorDiv = heldCell.parentElement.parentElement.parentElement;
            generateParcel(conveyorDiv);
        }
    });

    truckDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
        //TODO: showPreview();
    });

    drawTruck(hall.truck, truckDiv);
}
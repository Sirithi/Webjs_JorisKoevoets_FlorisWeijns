import{ Conveyor } from './Conveyor.js'
import { drawTruck, handleDrop } from './truckController.js';

export function addNewConveyor(hall){
    let conveyor = new Conveyor();
    let div = document.createElement('div');
    div.id = 'conveyor' + (hall.conveyors.length + 1);
    div.className = 'conveyor';
    document.getElementById('conveyors').append(div);
    conveyor.generateParcel(div);

    hall.addConveyor(conveyor);
}

export function addTruckFromQueue(hall, trucks){
    hall.truck = trucks.shift();
    let truckDiv = document.createElement('div');
    truckDiv.className = 'truck-div dropzone';
    document.getElementById('truck').append(truckDiv);
    
    truckDiv.addEventListener('drop', (e) =>{
        e.preventDefault();
        handleDrop(e);
    });

    truckDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
        //TODO: showPreview();
    });

    drawTruck(hall.truck, truckDiv);
}
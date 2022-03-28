import{ Conveyor } from './Conveyor.js'
import { drawParcel } from './conveyorController.js';
import { drawTruck } from './truckController.js';
export function addNewConveyor(hall){
    let canvas = document.createElement('canvas');
    canvas.draggable = "true";
    document.getElementById('conveyors').append(canvas);

    let ctx = canvas.getContext('2d')
    ctx.canvas.width = COLS * BLOCK_SIZE;
    ctx.canvas.height = ROWS * BLOCK_SIZE;
    ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

    let conveyor = new Conveyor(ctx);
    let parcel = conveyor.generateParcel();

    hall.addConveyor(conveyor);
}

export function addTruckFromQueue(hall, trucks){
    hall.truck = trucks.shift();
    console.log(hall.truck);
    let canvas = document.createElement('canvas');
    canvas.className += ' dropzone';
    canvas.addEventListener('drop', (e) =>{
        e.preventDefault();
        e.target.appendChild(el)
    });
    document.getElementById('truck').append(canvas);

    let ctx = canvas.getContext('2d');
    ctx.canvas.width = hall.truck.length * BLOCK_SIZE;
    ctx.canvas.height = hall.truck.width * BLOCK_SIZE;
    
    ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

    drawTruck(hall.truck, ctx);

}
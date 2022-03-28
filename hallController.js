import{ Conveyor } from './Conveyor.js'
import { drawParcel } from './conveyorController.js';
import { drawTruck } from './truckController.js';
export function addNewConveyor(hall){
    // let canvas = document.createElement('canvas');
    // canvas.draggable = "true";
    // document.getElementById('conveyors').append(canvas);

    // let ctx = canvas.getContext('2d')
    // ctx.canvas.width = COLS * BLOCK_SIZE;
    // ctx.canvas.height = ROWS * BLOCK_SIZE;
    // ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

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
    console.log(hall.truck);
    let canvas = document.createElement('canvas');
    canvas.className += 'dropzone';
    canvas.addEventListener('drop', (e) =>{
        e.preventDefault();
        hall.conveyor.
        hall.truck.fillSpaces(parcel, e.offsetX, e.offsetY);
    });
    canvas.addEventListener('dragover', (e) => {
        e.preventDefault();
        //TODO: showPreview();

    });
    document.getElementById('truck').append(canvas);

    let ctx = canvas.getContext('2d');
    ctx.canvas.width = hall.truck.length * BLOCK_SIZE;
    ctx.canvas.height = hall.truck.width * BLOCK_SIZE;
    
    ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

    drawTruck(hall.truck, ctx);

}
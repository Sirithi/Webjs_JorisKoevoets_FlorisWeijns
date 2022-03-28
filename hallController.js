import{ Conveyor } from './Conveyor.js'
import { drawParcel } from './conveyorController.js';
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
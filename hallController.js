import{ Conveyor } from './Conveyor.js'
import { drawParcel } from './conveyorController.js';
export function addNewConveyor(hall){
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d')
    ctx.canvas.width = COLS * BLOCK_SIZE;
    ctx.canvas.height = ROWS * BLOCK_SIZE;
    ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
    // ctx.fillRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
    // ctx.fillRect(30, 30, BLOCK_SIZE, BLOCK_SIZE);

    let conveyor = new Conveyor(ctx);
    let parcel = conveyor.generateParcel();
    
    canvas.draw
    document.getElementById('conveyors').append(canvas);

    hall.addConveyor(conveyor);
}
import{ Conveyor } from './Conveyor.js'
export function addNewConveyor(hall){
    hall.addConveyor(new Conveyor());

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d')
    ctx.fillRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
}
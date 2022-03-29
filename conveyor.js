import { generateParcel } from "./conveyorController.js";

export class Conveyor {
    constructor() {
        // this.grid = this.generateGrid();
        this.parcel = generateParcel(this);
    }

    // generateGrid() {
    //     return Array.from({length: ROWS}, () => Array(COLS).fill(0));
    // }
}
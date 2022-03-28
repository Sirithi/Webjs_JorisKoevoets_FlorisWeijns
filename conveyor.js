import { Parcel } from './Parcel.js';
import { drawParcel } from './conveyorController.js';

export class Conveyor {
    constructor() {
        // this.grid = this.generateGrid();
        this.parcels = [];
    }

    // generateGrid() {
    //     return Array.from({length: ROWS}, () => Array(COLS).fill(0));
    // }

    generateParcel(conveyorDiv) {
        let parcelTypes = Object.keys(Parcel);
        let randomType = parcelTypes[Math.floor(Math.random() * parcelTypes.length)]
        let parcel = Parcel[randomType];
        this.parcels.push(parcel);
        drawParcel(parcel, conveyorDiv);
    }
}
import { Parcel } from './Parcel.js';
import { drawParcel } from './conveyorController.js';

export class Conveyor {
    constructor(ctx) {
        this.ctx = ctx;
        this.grid = this.generateGrid();
    }

    generateGrid() {
        return Array.from({length: ROWS}, () => Array(COLS).fill(0));
    }

    generateParcel() {
        let parcelTypes = Object.keys(Parcel);
        let randomType = parcelTypes[Math.floor(Math.random() * parcelTypes.length)]
        let parcel = Parcel[randomType];

        drawParcel(this.ctx, parcel);

        return parcel;
    }
}
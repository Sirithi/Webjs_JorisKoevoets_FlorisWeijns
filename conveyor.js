import { generateParcel } from "./conveyorController.js";

export class Conveyor {
    constructor() {
        this.parcel = generateParcel();
    }
}
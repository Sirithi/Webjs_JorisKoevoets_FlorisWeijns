import { Parcel } from "./Parcel.js";

export class Conveyor {
    constructor() {
        this.parcel;
        this.generateParcel();
    }

    generateParcel() {
        let parcelTypes = Object.keys(Parcel);
        let randomType = parcelTypes[Math.floor(Math.random() * parcelTypes.length)]
        let parcel = Parcel[randomType]();
        this.parcel = parcel;
    }
}
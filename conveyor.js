export class Conveyor {
    generateParcel() {
        let parcelTypes = Object.keys(Parcel);
        let randomType = parcelTypes[Math.floor(Math.random() * parcelTypes.length)]
        let parcel = Parcel.randomType

        parcel.rotation = Math.floor(Math.random() * 4);

        return parcel;
    }
}
export class Truck {
    constructor(length, width, province, type, arrivalInterval = 10){
        this.length = length;
        this.width = width;
        this.province = province;
        this.type = type;
        this.arrivalInterval = arrivalInterval;
        this.spaces = this.setSpaces();
    }

    setArrivalTime(arrival){
        this.arrivalInterval = arrival;
    }

    setSpaces(){
        let truckSpaces = [];
        for (let y = 0; y < this.length; y++) {
            let row = [];
            for (let x = 0; x < this.width; x++) {
                row.push(0);
            }
            truckSpaces.push(row);
        }
        return truckSpaces;
    }

    fillSpaces(parcel, xCoord, yCoord){

    }
}
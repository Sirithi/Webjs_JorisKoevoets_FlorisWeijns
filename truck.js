class Truck {
    arrivalInterval;
    constructor(length, width, province){
        this.length = length;
        this.width = width;
        this.province = province;
    }

    setArrivalTime(arrival){
        this.arrivalInterval = arrival;
    }
}
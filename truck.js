class Truck {
    arrivalInterval;
    constructor(length, width, province, type){
        this.length = length;
        this.width = width;
        this.province = province;
        this.type = type;
    }

    setArrivalTime(arrival){
        this.arrivalInterval = arrival;
    }
}
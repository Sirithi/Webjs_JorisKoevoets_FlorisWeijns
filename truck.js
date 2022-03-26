class Truck {
    constructor(length, width, province, type, arrivalInterval = 10){
        this.length = length;
        this.width = width;
        this.province = province;
        this.type = type;
        this.arrivalInterval = arrivalInterval;
    }

    setArrivalTime(arrival){
        this.arrivalInterval = arrival;
    }
}
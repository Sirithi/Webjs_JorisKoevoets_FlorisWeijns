export class Truck {
    constructor(length, width, province, type, arrivalInterval = 10){
        this.length = length;
        this.width = width;
        this.province = province;
        this.type = type;
        this.arrivalInterval = parseInt(arrivalInterval);
        this.spaces = this.setSpaces();
        this.timer = this.startTimer();
    }

    startTimer() {
        return setInterval(this.decreaseArrivalInterval, 1000, this);
    }

    decreaseArrivalInterval(truck){
        if(truck.arrivalInterval <= 0) {
            clearInterval(truck.timer);
            window.truckQueue.push(truck);
            window.trucks.splice(window.trucks.indexOf(truck));
        }

        let temp = parseInt(document.getElementById('temperature-label').innerHTML);
        let weathers = document.getElementById('weather-label').innerHTML;
        let weatherList = weathers.split(', ');
        if(truck.type == 'cold' && temp >= 35){
            return;
        }
        if(truck.type == 'fragile' && (weatherList.includes('Rain') || weatherList.includes('Snow'))){
                return;
        }
        truck.arrivalInterval--;
    }

    setSpaces(){
        let truckSpaces = [];
        for (let y = 0; y < this.width; y++) {
            let row = [];
            for (let x = 0; x < this.length; x++) {
                row.push(0);
            }
            truckSpaces.push(row);
        }
        return truckSpaces;
    }

    fillSpaces(xCoord, yCoord){
        this.spaces[yCoord][xCoord] = 1;
    }
}
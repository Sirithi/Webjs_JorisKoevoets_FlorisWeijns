import { Conveyor } from "./Conveyor.js";
import { loadHall } from "./hallController.js";

export class Hall {
    constructor(id){
        this.id = id;
        this.conveyors = [];
        this.truck;
        this.startTimer();
    }

    startTimer() {
        setInterval(this.addTruckFromQueue, 1000, this);
    }

    addTruckFromQueue(hall) {
        if (!hall.truck) {
            hall.truck = window.truckQueue.shift();
            if (hall === currentHall){
                loadHall();
            } 
        }
    }

    addConveyor(conveyor) {
        this.conveyors.push(conveyor);
    }

    removeConveyor(conveyor){
        for(let i = 0; i < this.conveyors.length; i++){ 
            if ( conveyors[i] === conveyor) { 
                arr.splice(i, 1); 
            }
        }
    }
}

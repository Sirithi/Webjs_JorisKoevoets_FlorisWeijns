import { addNewConveyor } from "./hallController.js";
export class Hall {
    constructor(){
        this.conveyors = [];
        this.truck;
        addNewConveyor(this);
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

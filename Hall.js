import { addNewConveyor } from "./hallController.js";
export class Hall {
    constructor(id){
        this.id = id;
        this.conveyors = [];
        this.truck;
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

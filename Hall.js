import { addNewConveyor } from "./hallController.js";
export class Hall {
    constructor(){
        this.conveyors = [];
        this.truck;
        addNewConveyor(this);
    }
    addConveyor() {
        this.conveyors.push('x');
    }

    removeConveyor(conveyor){
        for(let i = 0; i < this.conveyors.length; i++){ 
            if ( conveyors[i] === conveyor) { 
                arr.splice(i, 1); 
            }
        }
    }
}

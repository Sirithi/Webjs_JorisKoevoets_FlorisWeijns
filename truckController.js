import { generateParcel, heldCell } from "./conveyorController.js";
import { loadHall } from "./hallController.js";


export function drawTruck(truck){
    let truckDiv = document.createElement('div');
    truckDiv.className = 'truck-div dropzone';
    document.getElementById('truck').append(truckDiv);

    truckDiv.addEventListener('drop', (e) =>{
        e.preventDefault();
        let heldCell = handleDrop(e)
        if (heldCell) {
            let conveyorDiv = heldCell.parentElement.parentElement.parentElement;
            let conveyor = currentHall.conveyors[currentHall.conveyors.findIndex(conveyor => {
                if (conveyor.id == conveyorDiv.id.split(':')[1]) {
                    return true;
                }
                return false;
            })];
            generateParcel(conveyor);
            loadHall()
        }
    });

    truckDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
        //TODO: showPreview();
    });

    for (let i = 0; i < truck.width; i++) {
        let truckRow = document.createElement('div');
        truckRow.className = 'my-row';
        for (let j = 0; j < truck.length; j++) {
            let cell = document.createElement('div');
            cell.id = 'truck-' + j + '-' + i;
            cell.className = 'cell';
            truckRow.append(cell);
        }
        truckDiv.append(truckRow);
    }

    for (let y = 0; y < truck.spaces.length; y++) {
        for (let x = 0; x < truck.spaces[y].length; x++) {
            if(truck.spaces[y][x]){
                console.log('truck-' + x + '-' + y);
                document.getElementById('truck-' + x + '-' + y).className += ' filled';
            }
        }
    }
}

export function handleDrop(e) {
    let droppedOn = document.elementFromPoint(e.clientX, e.clientY);
    
    let parcelWidth = heldCell.parentElement.childElementCount;
    let parcelHeight = heldCell.parentElement.parentElement.childElementCount;

    let heldCellId = heldCell.id;
    let [_1, _2, _3, heldX, heldY] = heldCellId.split('-');

    let droppedOnId = droppedOn.id;
    let [_4, droppedX, droppedY] = droppedOnId.split('-');

    let topLeftX = droppedX - heldX;
    let topLeftY = droppedY - heldY;

    let conveyorId = heldCell.parentElement.parentElement.parentElement.id.split(':')[1];

    let truckCellsToFill = [];
    try {
        for (let i = 0; i < parcelWidth; i++) {
            for (let j = 0; j < parcelHeight; j++) {
                let parcelCell = document.getElementById(conveyorId + '-parcel-' + i + '-' + j);
                let truckCell = document.getElementById('truck-' + (topLeftX + i) + '-' + (topLeftY + j));
                if (!parcelCell || !truckCell) {
                    throw new OutOfBoundsException('Parcel out of bounds');
                }
                if (parcelCell.classList.contains('filled')) {
                    if (truckCell.classList.contains('filled')) {
                        throw new OutOfBoundsException('Parcel in the way');
                    };
                    truckCellsToFill.push(truckCell);
                }
            }
        }
    } catch (err) {
        window.alert(err.message);
        return null;
    }

    truckCellsToFill.forEach(cell => {
        cell.className += ' filled';
        currentHall.truck.fillSpaces(cell.id.split('-')[1], cell.id.split('-')[2]);
    })
    
    return heldCell;
}

class OutOfBoundsException extends Error {

}
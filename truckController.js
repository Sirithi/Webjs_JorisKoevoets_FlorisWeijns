import { heldCell } from "./conveyorController.js";

export function drawTruck(truck, truckDiv){
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
}

export function handleDrop(e) {
    let droppedOn = document.elementFromPoint(e.clientX, e.clientY);
    
    let parcelWidth = heldCell.parentElement.childElementCount;
    let parcelHeight = heldCell.parentElement.parentElement.childElementCount;

    let heldCellId = heldCell.id;
    console.log(heldCellId);
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
                console.log(parcelCell);
                console.log(truckCell);
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
    })
    return heldCell;
}

class OutOfBoundsException extends Error {

}
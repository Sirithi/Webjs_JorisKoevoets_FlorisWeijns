import { heldCell } from "./conveyorController.js";

export function drawTruck(truck, truckDiv){
    for (let i = 0; i < truck.width; i++) {
        let truckRow = document.createElement('div');
        truckRow.className = 'my-row';
        for (let j = 0; j < truck.length; j++) {
            let cell = document.createElement('div');
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

    let heldCellHorizontalIndexOnParcel = 0;
    let leftParcelCell = heldCell;
    while (leftParcelCell.previousSibling) {
        leftParcelCell = leftParcelCell.previousSibling;
        heldCellHorizontalIndexOnParcel++;
    }

    let heldCellVerticalIndexOnParcel = 0
    let firstParcelRow = heldCell.parentElement;
    while (firstParcelRow.previousSibling) {
        firstParcelRow = firstParcelRow.previousSibling;
        heldCellVerticalIndexOnParcel++;
    }

    let parcelLeftEdgeOnTruck = droppedOn;
    for (let i = 0; i < heldCellHorizontalIndexOnParcel; i++) {
        parcelLeftEdgeOnTruck = parcelLeftEdgeOnTruck.previousSibling;
    }
    let truckLeftEdge = parcelLeftEdgeOnTruck;
    let parcelHorizontalIndexOnTruck = 0;
    while (truckLeftEdge.previousSibling) {
        parcelHorizontalIndexOnTruck++;
        truckLeftEdge = truckLeftEdge.previousSibling;
    }
    
    let parcelTopRowOnTruck = droppedOn.parentElement;
    for (let i = 0; i < heldCellVerticalIndexOnParcel; i++) {
        parcelTopRowOnTruck = parcelTopRowOnTruck.previousSibling;
    }
    let parcelTopLeftCellOnTruck = parcelTopRowOnTruck.firstChild;

    for (let i = 0; i < parcelHorizontalIndexOnTruck; i++) {
        parcelTopLeftCellOnTruck = parcelTopLeftCellOnTruck.nextSibling;
    }
    
    let cellToAdd = parcelTopLeftCellOnTruck;
    let destinationCells = [];
    for (let i = 0; i < parcelHeight; i++) {
        let destinationRow = []
        for (let j = 0; j < parcelWidth; j++) {
            destinationRow.push(cellToAdd);
            cellToAdd = cellToAdd.nextSibling ?? cellToAdd;
        }
        destinationCells.push(destinationRow);
        cellToAdd = cellToAdd.parentElement.nextSibling?.firstChild;
        for (let k = 0; k < parcelHorizontalIndexOnTruck; k++) {
            cellToAdd = cellToAdd?.nextSibling;
        }
    }

    let toAppendRow = firstParcelRow;
    destinationCells.forEach(destRow => {
        let toAppendCell = toAppendRow.firstChild;
        destRow.forEach(destCell => {
            destCell.append(toAppendCell.cloneNode());
            toAppendCell = toAppendCell.nextSibling;
        });
        toAppendRow = toAppendRow.nextSibling;
    })
}


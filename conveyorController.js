import { Parcel } from "./Parcel.js";

export let heldCell;

export function generateParcel(conveyorDiv) {
    clearParcel(conveyorDiv)
    let parcelTypes = Object.keys(Parcel);
    let randomType = parcelTypes[Math.floor(Math.random() * parcelTypes.length)]
    let parcel = Parcel[randomType];
    drawParcel(parcel, conveyorDiv);
}

export function drawParcel(parcel, conveyorDiv) {
    const shape = parcel.shape()
    let parcelDiv = document.createElement('div');
    parcelDiv.className = 'parcel-div';
    parcelDiv.draggable = 'true';
    parcelDiv.addEventListener('dragstart', (e) => {
        heldCell = document.elementFromPoint(e.clientX, e.clientY);
    });
    parcelDiv.addEventListener('dragend', (e) => {
        heldCell = null;
    })

    for (let row = 0; row < shape.length; row++) {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'my-row';
        parcelDiv.append(rowDiv);
        for (let cell = 0; cell < shape[row].length; cell++) {
            let cellDiv = document.createElement('div');
            cellDiv.id = conveyorDiv.id.split('-')[1] + 'parcel-' + cell + '-' + row;
            cellDiv.className = 'cell';
            if(shape[row][cell]) {
                cellDiv.className += ' filled';
            }
            rowDiv.append(cellDiv);
        }
    }
    conveyorDiv.append(parcelDiv);
}

export function clearParcel(conveyorDiv) {
    console.log(conveyorDiv);
    conveyorDiv.firstChild?.remove();
}
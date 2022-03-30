export let heldCell;

export function drawParcel(parcel, conveyorDivId) {
    const shape = parcel.shape;
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
            cellDiv.id = conveyorDivId + '-parcel-' + cell + '-' + row;
            cellDiv.className = 'cell';
            if(shape[row][cell]) {
                cellDiv.className += ' filled';
            }
            rowDiv.append(cellDiv);
        }
    }
    return parcelDiv;
}

export function clearParcel(conveyorDiv, conveyor) {
    conveyorDiv.firstChild?.remove();
    conveyor.parcel = null;
}
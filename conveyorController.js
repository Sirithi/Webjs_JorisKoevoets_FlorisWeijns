export function drawParcel(parcel, conveyorDiv) {
    const shape = parcel.shape()
    let parcelDiv = document.createElement('div');
    parcelDiv.className = 'parcel-div';
    parcelDiv.draggable = 'true';
    parcelDiv.addEventListener('dragstart', (e) => {
        
    })
    for (let row = 0; row < shape.length; row++) {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'my-row';
        parcelDiv.append(rowDiv);
        for (let cell = 0; cell < shape[row].length; cell++) {
            let cellDiv = document.createElement('div');
            cellDiv.className = 'cell';
            if(shape[row][cell]) {
                cellDiv.className += ' filled';
            }
            rowDiv.append(cellDiv);
        }
        console.log(parcel.type);
        console.log(shape[row]);
    }
    conveyorDiv.append(parcelDiv);
}
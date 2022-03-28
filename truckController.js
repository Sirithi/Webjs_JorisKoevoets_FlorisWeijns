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


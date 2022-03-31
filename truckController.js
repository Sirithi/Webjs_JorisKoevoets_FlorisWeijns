import { clearParcel, heldCell } from "./conveyorController.js";
import { loadHall } from "./hallController.js";


export function drawTruck(truck){
    let truckDiv = document.createElement('div');
    truckDiv.className = 'truck-div dropzone';
    document.getElementById('truck').append(truckDiv);

    truckDiv.addEventListener('drop', async function(e) {
        e.preventDefault();
        let heldCell = await handleDrop(e)
        if (heldCell) {
            let conveyorDiv = heldCell.parentElement.parentElement.parentElement;
            let conveyor = currentHall.conveyors[currentHall.conveyors.findIndex(conveyor => {
                if (conveyor.id == conveyorDiv.id.split(':')[1]) {
                    return true;
                }
                return false;
            })];
            
            clearParcel(conveyorDiv, currentHall.conveyors[parseInt(conveyorDiv.id.split(':')[1].split('-')[1]) - 1]);
            conveyor.generateParcel();
            loadHall()
        }
    });

    truckDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
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
                document.getElementById('truck-' + x + '-' + y).className += ' filled';
            }
        }
    }
}

export async function handleDrop(e) {
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
    
    let newHeldCell = await doAnimation(heldCell, droppedOn);

    truckCellsToFill.forEach(cell => {
        cell.className += ' filled';
        currentHall.truck.fillSpaces(cell.id.split('-')[1], cell.id.split('-')[2]);
    })
    return newHeldCell;
}

export function updateTruckList() {
    if(truckFormIsOpen){
        return;
    }
    let truckQueueDiv = document.getElementById('truck-queue');
    let truckArrivalsDiv = document.getElementById('truck-arrivals');

    truckArrivalsDiv.replaceChildren();
    let arrivalsHeader = document.createElement('h2');
    arrivalsHeader.innerHTML = 'Arrivals';
    truckArrivalsDiv.append(arrivalsHeader);
    trucks.forEach(truck => {
        
        let truckDiv = document.createElement('div');
        truckDiv.className = 'flex-vertical';
        truckDiv.id = 'truck-' + trucks.indexOf(truck);
        let typeString = truck.type.charAt(0).toUpperCase() + truck.type.slice(1);
        let typeLabel =  document.createElement('label');
        typeLabel.innerHTML = typeString;
        let arrivalLabel =  document.createElement('label');
        arrivalLabel.innerHTML = 'Arrives in: ' + truck.arrivalInterval + ' s';
        let measurementLabel =  document.createElement('label');
        measurementLabel.innerHTML = 'W: ' + truck.width + ', L: ' + truck.length;
        truckDiv.append(typeLabel, arrivalLabel, measurementLabel);
        truckArrivalsDiv.append(truckDiv);
    });

    truckQueueDiv.replaceChildren();
    let queueHeader = document.createElement('h2');
    queueHeader.innerHTML = 'Truck queue';
    truckQueueDiv.append(queueHeader);
    truckQueue.forEach(truck => {
        let truckDiv = document.createElement('div');
        truckDiv.className = 'flex-vertical';
        let typeString = truck.type.charAt(0).toUpperCase() + truck.type.slice(1);
        let typeLabel =  document.createElement('label');
        typeLabel.innerHTML = typeString;
        let measurementLabel =  document.createElement('label');
        measurementLabel.innerHTML = 'W: ' + truck.width + ', L: ' + truck.length;
        truckDiv.append(typeLabel, measurementLabel);
        truckQueueDiv.append(truckDiv);
    });
    if(truckQueueDiv.childElementCount == 1){
        truckQueueDiv.append(document.createElement('label').innerHTML = 'Empty');
    }
    if(truckArrivalsDiv.childElementCount == 1){
        truckArrivalsDiv.append(document.createElement('label').innerHTML = 'Empty');
    }
}

export function updateArrivalTime(truck){
    let truckArrivalLabel = document.getElementById('truck-' + trucks.indexOf(truck)).children[1];
    truckArrivalLabel.innerHTML = 'Arrives in: ' + truck.arrivalInterval + ' s';
}

async function doAnimation(heldCell, droppedOn){
    let xDist = droppedOn.getBoundingClientRect().x - heldCell.getBoundingClientRect().x;
    let yDist = droppedOn.getBoundingClientRect().y - heldCell.getBoundingClientRect().y;
    let parcelDiv = heldCell.parentElement.parentElement;

    for (let i = 0; i <= ANIMATION_LENGTH; i++) {
        await sleep(10);
        let x = i * xDist / ANIMATION_LENGTH;
        let y = i * yDist / ANIMATION_LENGTH;
        parcelDiv.style.transform = `translate(${x}px, ${y}px)`;
    }
    
    return heldCell;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class OutOfBoundsException extends Error {

}
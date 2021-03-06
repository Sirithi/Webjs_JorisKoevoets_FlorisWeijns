import{ TypeEnum } from './TypeEnum.js';
import{ Hall } from './Hall.js';
import{ Truck } from './Truck.js';
import {loadStepForm} from './StepForm.js';
import {addNewConveyor, loadHall, switchHall} from './hallController.js';
import { changeCity } from './weatherApi.js';
import { updateTruckList } from './truckController.js';

document.getElementById("add-truck-btn").setAttribute("onclick", "loadForm()");
document.getElementById("add-conveyor-btn").setAttribute("onclick", "addNewConveyor(currentHall)");
document.getElementById("send-truck-btn").setAttribute("onclick", "currentHall.sendTruck()");
document.getElementById("switch-hall-btn").setAttribute("onclick", "switchHall()");

document.getElementById('city-search').addEventListener('keydown', e => {
  if(e.code == 'Enter'){
    changeCity(e.target.value).then(() => updateTruckList());
  }
});
changeCity('Den Bosch');

window.truckQueue = [];
window.currentHall = new Hall(1);
window.otherHall = new Hall(2);

window.loadForm = loadForm;
window.addNewConveyor = addNewConveyor;
window.switchHall = switchHall;
window.truckFormIsOpen = false;

//Truck form variables
window.currentTab = 0
let types = new TypeEnum(
  'General','Cold','Express','Pallet','Fragile'
);

window.trucks = [new Truck('6', '4', 'Groningen', 'cold', '1')];
updateTruckList();
loadHall();

function loadForm(){
  let truckQueueDiv = document.getElementById('truck-queue');
  let truckArrivalsDiv = document.getElementById('truck-arrivals');
  truckArrivalsDiv.replaceChildren();
  truckQueueDiv.replaceChildren();
  truckFormIsOpen = true;

  document.getElementById("add-truck-btn").remove();
  let stepform = document.createElement("form");
  stepform.id = "truck-form";
  stepform.className = 'truck-form';
  stepform.action = "";

  const head = document.createElement("h1");
  head.innerHTML = 'Add Truck:'

  let sizeDiv = document.createElement('div');
  sizeDiv.className = 'tab none';
  sizeDiv.innerHTML = 'Size:';
  let truckLength = document.createElement('input');
  truckLength.placeholder = 'Truck length';
  truckLength.id = 'truck-length';
  truckLength.type = 'number';
  truckLength.min = 4;
  let truckWidth = document.createElement('input');
  truckWidth.id = 'truck-width';
  truckWidth.placeholder = 'Truck width';
  truckWidth.type = 'number';
  truckWidth.min = 4;
  let arrivalTime = document.createElement('input');
  arrivalTime.id = 'arrival-time';
  arrivalTime.placeholder = 'Arrival time (seconds)';
  arrivalTime.type = 'number';
  arrivalTime.min = 0;

  sizeDiv.append(truckLength, truckWidth, arrivalTime);

  let provinceDiv = document.createElement('div');
  provinceDiv.className = 'tab none';
  provinceDiv.innerHTML = 'Province:';
  const provinces = ['Noord-Brabant','Limburg','Zeeland','Gelderland','Zuid-Holland','Noord-Holland','Flevoland','Drenthe','Utrecht','Overijssel','Groningen','Friesland'];
  for (let province of provinces) {
    let div = document.createElement('div');
    div.className = 'flex-horizontal justify-center';
    let input = document.createElement('input');
    input.type = 'radio';
    input.oninput = 'this.className = ""';
    input.value = province;
    input.id = province;
    input.name = 'province';
    let label = document.createElement('label');
    label.for = province;
    label.innerHTML = province;
    label.className = 'label';

    div.append(label, input);
    provinceDiv.append(div);
  }
  provinceDiv.children[0].children[1].checked = true;

  let truckTypeDiv = document.createElement('div');
  truckTypeDiv.className = 'tab none';
  truckTypeDiv.innerHTML = 'Type of truck:';
  for (let type of types) {
    let div = document.createElement('div');
    div.className = 'flex-horizontal justify-center';
    let input = document.createElement('input');
    input.type = 'radio';
    input.oninput = 'this.className = ""';
    input.value = type.toLowerCase();
    input.id = type;
    input.name = 'type';
    let label = document.createElement('label');
    label.for = type;
    label.innerHTML = type;
    label.className = 'label';

    div.append(label, input)
    truckTypeDiv.append(div);
  }
  truckTypeDiv.children[0].children[1].checked = true;

  let buttons = document.createElement('div');
  buttons.className = 'form-nav-buttons';
  buttons.id = 'form-nav-buttons';
  let prevButton = document.createElement('button');
  prevButton.type = 'button';
  prevButton.id = 'prev-btn';
  prevButton.innerHTML = 'Previous';
  let nextButton = document.createElement('button');
  nextButton.type = 'button';
  nextButton.id = 'next-btn';
  nextButton.innerHTML = 'Next';

  buttons.append(prevButton, nextButton);
  
  let stepDots = document.createElement('div');
  stepDots.id = 'step-dots';
  stepDots.className = 'step-dots';
  const numberOfPages = 3;
  for (let i = 0; i < numberOfPages; i++) {
    let step = document.createElement('span');
    step.className = 'step';
    stepDots.append(step);
  }

  stepform.append(sizeDiv, provinceDiv, truckTypeDiv, buttons, stepDots);
  
  document.getElementById('truck-form-div').append(stepform);
  loadStepForm();
}
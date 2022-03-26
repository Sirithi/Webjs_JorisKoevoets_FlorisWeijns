
document.getElementById("add-truck-btn").setAttribute("onclick", "loadForm()");
document.getElementById("add-conveyor-btn").setAttribute("onclick", "addNewConveyor(currentHall)");


// //Canvas definition

// ctx.canvas.width = COLS * BLOCK_SIZE;
// ctx.canvas.height = ROWS * BLOCK_SIZE;

// ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

import{ TypeEnum } from './TypeEnum.js';
import{ Hall } from './Hall.js';
import{ Truck } from './Truck.js';
window.loadForm = loadForm;
// import{ Parcel } from './Parcel.js';
// import{ Conveyor } from './Conveyor.js';

// loadScript('hallController.js');

//Truck form variables
window.currentTab = 0
window.trucks = [];
export let types = new TypeEnum(
  'General','Cold','Express','Pallet','Fragile'
);

let halls = [new Hall()];
halls[0].truck = new Truck(3,4, 'Groningen', 'cold', 0);
let currentHall = halls[0];

function loadForm(){
    document.getElementById("add-truck-btn").remove();
    let stepform = document.createElement("form");
    stepform.id = "truck-form";
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
    let truckWidth = document.createElement('input');
    truckWidth.id = 'truck-width';
    truckWidth.placeholder = 'Truck width';
    truckWidth.type = 'number';

    sizeDiv.append(truckLength, truckWidth);

    let provinceDiv = document.createElement('div');
    provinceDiv.className = 'tab none';
    provinceDiv.innerHTML = 'Province:';
    const provinces = ['Noord-Brabant','Limburg','Zeeland','Gelderland','Zuid-Holland','Noord-Holland','Flevoland','Drenthe','Utrecht','Overijssel','Groningen','Friesland'];
    for (let province of provinces) {
      let input = document.createElement('input');
      input.type = 'radio';
      input.oninput = 'this.className = ""';
      input.value = province;
      input.id = province;
      input.name = 'province';
      let label = document.createElement('label');
      label.for = province;
      label.innerHTML = province;

      provinceDiv.append(input, label);
    }
    provinceDiv.children[0].checked = true;

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
    loadScript('StepForm.js');
}

function loadScript(src) {
    let script = document.createElement('script');
    script.id = src;
    script.src = src;
    script.type = 'module';
    document.head.append(script);
  }

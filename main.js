document.getElementById("add-truck-btn").setAttribute("onclick", "loadForm()");

let trucks = [];

function loadForm(){
    document.getElementById("add-truck-btn").remove();
    let stepform = document.createElement("form");
    stepform.id = "truck-form";
    stepform.action = "";

    const head = document.createElement("h1");
    head.innerHTML = 'Add Truck:'

    let sizeDiv = document.createElement('div');
    sizeDiv.className = 'tab';
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
    provinceDiv.className = 'tab';
    provinceDiv.innerHTML = 'Province:';
    const provinces = ['Noord-Brabant','Limburg','Zeeland','Gelderland','Zuid-Holland','Noord-Holland','Flevoland','Drenthe','Utrecht','Overijssel','Groningen','Friesland'];
    for (province of provinces) {
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
    truckTypeDiv.className = 'tab';
    truckTypeDiv.innerHTML = 'Type of truck:'
    const truckTypes = ['General','Cold','Express','Pallet','Fragile'];
    for (type of truckTypes) {
      let input = document.createElement('input');
      input.type = 'radio';
      input.oninput = 'this.className = ""';
      input.value = type;
      input.id = type;
      input.name = 'type';
      let label = document.createElement('label');
      label.for = type;
      label.innerHTML = type;

      truckTypeDiv.append(input, label);
    }
    truckTypeDiv.children[0].checked = true;

    let buttons = document.createElement('div');
    buttons.className = 'form-nav-buttons';
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
    stepDots.className = 'step-dots';
    const numberOfPages = 3;
    for (let i = 0; i < numberOfPages; i++) {
      let step = document.createElement('span');
      step.className = 'step';
      stepDots.append(step);
    }

    stepform.append(sizeDiv, provinceDiv, truckTypeDiv, buttons, stepDots);
    
    document.body.append(stepform);
    loadScript('StepForm.js');
}

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;

    document.head.append(script);
  }

function buildTruck(length, width, province, type){
    let model;
    switch (type) {
        case 'General':
            model = Truck;
            break;
        case 'Cold':
            model = ColdTransport;
            break;
        case 'Express':
            model = ExpressTransport;
            break;
        case 'Pallet':
            model = PalletTransport;
            break;
        case 'Fragile':
            model = FragileTransport;
            break;
        default:
            throw new InputError('truck type unknown');
    }
    trucks.append(new model(length,width,province));
}
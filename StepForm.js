let currentTab = 0;
showTab(currentTab); 

document.getElementById("prev-btn").setAttribute("onclick", "nextPrev(-1)");
document.getElementById("next-btn").setAttribute("onclick", "nextPrev(1)");

function showTab(n) {
  let tabs = document.getElementsByClassName("tab");
  tabs[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prev-btn").style.display = "none";
  } else {
    document.getElementById("prev-btn").style.display = "inline";
  }
  if (n == (tabs.length - 1)) {
    document.getElementById("next-btn").innerHTML = "Submit";
  } else {
    document.getElementById("next-btn").innerHTML = "Next";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  let tabs = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  tabs[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= tabs.length) {
    // document.getElementById("truck-form").submit();
    const length = document.getElementById('truck-length').value;
    const width = document.getElementById('truck-width').value;
    const types = document.getElementsByName('type');
    let truckType;
    types.forEach(type => {
      if(type.checked){
        truckType = type.value;
      }
    });
    const provinces = document.getElementsByName('province');
    let truckProvince;
    provinces.forEach(province => {
      if(province.checked){
        truckProvince = province.value;
      }
    });
    buildTruck(length, width, truckProvince, truckType);
    // trucks.append(truck);
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  let valid = true;
  const tabs = document.getElementsByClassName("tab");
  const inputs = tabs[currentTab].getElementsByTagName("input");
  let radioChecked = false;
  let hasRadio = false;
  for (let i = 0; i < inputs.length; i++) {
    if(inputs[i].type === "radio"){
        hasRadio = true;
        if(inputs[i].checked){
            radioChecked = true;
        }
    }
    if (inputs[i].value == "") {
      inputs[i].className += " invalid";
      valid = false;
    }
  }
  if(hasRadio){
    valid = radioChecked;
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  let steps = document.getElementsByClassName("step");
  for (let i = 0; i < steps.length; i++) {
    steps[i].className = steps[i].className.replace(" active", "");
  }
  steps[n].className += " active";
}
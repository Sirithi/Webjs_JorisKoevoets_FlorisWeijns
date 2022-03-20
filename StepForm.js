let currentTab = 0;
showTab(currentTab); 

document.getElementById("prevBtn").setAttribute("onclick", "nextPrev(-1)");
document.getElementById("nextBtn").setAttribute("onclick", "nextPrev(1)");

function showTab(n) {
  let tabs = document.getElementsByClassName("tab");
  tabs[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (tabs.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  let tabs = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  tabs[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= tabs.length) {
    document.getElementById("truckForm").submit();
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
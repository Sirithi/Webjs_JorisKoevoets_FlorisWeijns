document.getElementById("add-truck-btn").setAttribute("onclick", "loadForm()");

function loadForm(){
    document.getElementById("add-truck-btn").remove();
    let content = document.createElement("stepform");
    content.innerHTML=
    `<form id="truck-form" action="">
    <h1>Add Truck:</h1>
    
    <!-- One "tab" for each step in the form: -->
    <div class="tab">Size:
      <input placeholder="Truck length" type="number">
      <input placeholder="Truck Width" type="number">
    </div>
    
    <div class="tab">Province:
      <input type="radio" oninput="this.className = ''" value="Noord-Brabant" id="NB" name="province">
      <label for="NB">Noord-Brabant</label>
      <input type="radio" oninput="this.className = ''" value="Limburg" id="L" name="province">
      <label for="L">Limburg</label>
      <input type="radio" oninput="this.className = ''" value="Zeeland" id="Z" name="province">
      <label for="Z">Zeeland</label>
      <input type="radio" oninput="this.className = ''" value="all" id="A" name="province" checked>
      <label for="A">All</label>
    </div>
    
    <div class="tab">Type of truck:
        <input type="radio" oninput="this.className = ''" value="general" id="general" name="type" checked>
        <label for="general">General Transport</label>
        <input type="radio" oninput="this.className = ''" value="cold" id="cold" name="type">
        <label for="cold">Cold</label>
        <input type="radio" oninput="this.className = ''" value="express" id="express" name="type">
        <label for="express">Express</label>
        <input type="radio" oninput="this.className = ''" value="pallet" id="pallet" name="type">
        <label for="pallet">Pallet</label>
        <input type="radio" oninput="this.className = ''" value="fragile" id="fragile" name="type">
        <label for="fragile">Fragile</label>
    </div>
    
    <div style="overflow:auto;">
      <div style="float:right;">
        <button type="button" id="prev-btn">Previous</button>
        <button type="button" id="next-btn">Next</button>
      </div>
    </div>
    
    <div style="text-align:center;margin-top:40px;">
      <span class="step"></span>
      <span class="step"></span>
      <span class="step"></span>
    </div>
    
    </form>`;
    document.body.append(content);
    loadScript("StepForm.js");
}

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;

    document.head.append(script);
  }
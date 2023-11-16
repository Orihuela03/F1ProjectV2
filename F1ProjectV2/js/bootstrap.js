let bicycles = [];

function initialize() {
  const BICYCLE_FORM = document.getElementById("bicycle-form");
  BICYCLE_FORM.addEventListener("submit", addBicycle);
  showbicycles();
}

function addBicycle(event) {
  event.preventDefault();
  const BRAND = event.target.brand.value;
  const MODEL = event.target.model.value;

  if (BRAND == "") {
    let BRAND_ERROR = document.getElementById("brand-error");
    BRAND_ERROR.style.visibility = "visible";

  }
  if (MODEL == "") {
    let MODEL_ERROR = document.getElementById("model-error");
    MODEL_ERROR.style.visibility = "visible";
  }


  bicycles.push({
    brand: BRAND,
    model: MODEL
  })

  showbicycles();
}

function showbicycles() {
  const BICYCLE_LIST = document.getElementById("bicycle-list");

  let allbicycles = "";
  for (let i = 0; i < bicycles.length; i++) {
    allbicycles = allbicycles + `<li>${bicycles[i].brand} ${bicycles[i].model} <button onclick="deleteBicycle(${i})">X</button></li>`;
  }
  BICYCLE_LIST.innerHTML = allbicycles;
}

function deleteBicycle(bicycleid) {
  bicycles.splice(bicycleid, 1);
  showbicycles();
}

initialize();
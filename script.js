function popupRun() {
  window.alert("I'm Sorry, This Page is COOMING SOON");
}

//login function popup
let modal = document.getElementById("loginModal");
let btn = document.getElementById("loginBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const myForm = document.getElementById("my-form");

myForm.innerHTML = `
  <input type="text" id="name" placeholder="Nama Lengkap">
  <input type="text" id="city" placeholder="Alamat">
  <input type="email" id="email" placeholder="Email">
  <input type="number" id="zip-code" placeholder="Masukan Angka">
  <input type="checkbox" id="status">
  <label id="check">Dengan ini saya menyatakan data yang diisi pada form ini adalah benar dan telah sesuai</label>
  <button id="submit-form">Submit</button>
  <div id="warning"></div>
`;

function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;
  return { name, city, email, zipCode, status };
}

function isNumber(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function checkBoxIsChecked() {
  const status = document.getElementById("status");
  if (status.checked) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(formData) {
  if (formData != null && !isNaN(formData.zipCode) && formData.status.checked) {
    return true;
  } else {
    return false;
  }
}

function submit(event) {
  event.preventDefault();
  const formData = handleGetFormData();
  if (!validateFormData(formData)) {
    const warning = document.getElementById("warning");
    warning.innerHTML = "Periksa form anda sekali lagi";
  } else {
    const warning = document.getElementById("warning");
    warning.innerHTML = "";
  }
}

myForm.addEventListener("submit", submit);

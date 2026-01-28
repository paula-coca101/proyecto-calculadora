function sumar() {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  document.getElementById("resultado").textContent = a + b;
}

function restar() {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  document.getElementById("resultado").textContent = a - b;
}

function multiplicar() {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  document.getElementById("resultado").textContent = a * b;
}

function dividir() {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  document.getElementById("resultado").textContent =
    b !== 0 ? a / b : "No se puede dividir por cero";
}

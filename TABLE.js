function generateTable() {
  const number = Number(document.getElementById("number").value);
  const resultDiv = document.getElementById("result");

  if (!number || number < 1) {
    resultDiv.innerHTML = "<p style='color: red;'>Please enter a valid number</p>";
    return;
  }

  let html = `<h3>Multiplication Table of ${number}</h3>`;

  for (let i = 1; i <= 12; i++) {
    html += `<p>${number} × ${i} = ${number * i}</p>`;
  }

  resultDiv.innerHTML = html;
}
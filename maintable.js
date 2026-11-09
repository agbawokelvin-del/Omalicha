function build() {
  const n = Number(document.getElementById("size").value);
  let html = "<tr><th>×</th>";

  let c = 1;
  while (c <= n) {
    html += `<th>${c}</th>`;
    c = c + 1;
  }
  html += "</tr>";

  let r = 1;
  while (r <= n) {
    html += `<tr><th>${r}</th>`;

    c = 1;
    while (c <= n) {
      const cls = r === c ? "square" : "";
      html += `<td class="${cls}">${r * c}</td>`;
      c = c + 1;
    }

    html += "</tr>";
    r = r + 1;
  }

  document.getElementById("grid").innerHTML = html;
}

build();
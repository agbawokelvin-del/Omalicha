let students = [];

function getGrade(score) {
  if (score >= 80 && score <= 100) {
    return "A";
  } else if (score >= 60 && score <= 79) {
    return "B";
  } else if (score >= 40 && score <= 59) {
    return "C";
  } else if (score >= 0 && score <= 39) {
    return "D";
  } else {
    return "Invalid";
  }
}

function addStudent() {
  const nameInput = document.getElementById("studentName");
  const scoreInput = document.getElementById("studentScore");

  const name = nameInput.value.trim();
  const score = Number(scoreInput.value);

  if (name === "" || scoreInput.value === "") {
    alert("Please enter both name and score");
    return;
  }

  if (score < 0 || score > 100) {
    alert("Score must be between 0 and 100");
    return;
  }

  const grade = getGrade(score);

  students.push({
    name: name,
    score: score,
    grade: grade
  });

  displayStudents();

  // Clear inputs
  nameInput.value = "";
  scoreInput.value = "";
  nameInput.focus();
}

function displayStudents() {
  const tableBody = document.getElementById("studentTable");
  tableBody.innerHTML = "";

  students.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.score}</td>
      <td><strong>${student.grade}</strong></td>
    `;

    tableBody.appendChild(row);
  });
}
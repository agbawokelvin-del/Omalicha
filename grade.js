function getGrade(score) {
    if (score >=80) {
        return "A";
    }
    else if (score >= 60){
        return "B";
    }
    else if (score >= 40){
        return "C";
    }
    else{
return "F";
    }

}

const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const addBtn = document.getElementById("addBtn");
const errorMsg = document.getElementById("error");
const tableBody = document.getElementById("tablebody");

let count = 0;
addBtn.addEventListener("click", function(){
    const name = nameInput.value.trim ();
    const score = Number(scoreInput.value);
    
    if (name === "" || scoreInput.value === "" ){
        errorMsg.textContent = "Please enter both name and score";
        return;
    }
    if (score < 0 || score > 100){
        errorMsg.textContent = "Score must be between 0 and 100";
return;
    }
    errorMsg.textContent = "";
    count++;

    const grade = getGrade(score);
    const row = tableBody.insertRow();
    const values = [count, name, score, grade];

    values.forEach(function (value) {
        const cell = row.insertCell();
        cell.textContent = value;

    });
    row.cells[3].classList.add("grade-" + grade);
    nameInput.value = "";
    scoreInput.value = "";
    nameInput.focus();
}



);
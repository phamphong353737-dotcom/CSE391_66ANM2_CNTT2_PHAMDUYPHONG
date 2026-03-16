// Lấy thẻ div có id="demo"
let element = document.getElementById("demo");

// Thay đổi nội dung bên trong
element.innerHTML = "<strong>Xin chào!</strong>";


const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("tableBody");
const stats = document.getElementById("stats");

let students = []

function getRank(score) {
    if (score >= 8.5) return "Giỏi";
    if (score >= 7) return "Khá";
    if (score >= 5) return "Trung bình";
    return "Yếu";
}

function renderTable() {
    tableBody.innerHTML = ""

    students.forEach((student, index) => {

        const tr = document.createElement("tr");

        if (student.score < 5) {
            tr.classList.add("low-score")
        }

        tr.innerHTML = `
        <td>${student.name}</td>
        <td>${student.score}</td>
        <td>${getRank(student.score)}</td>
        <td>
            <button data-index="${index}">Xóa</button>
        </td>
        `;
        tableBody.appendChild(tr)
    })
    updateStats();
}

function updateStats() {

    const total = students.length;

    const avg =
        total === 0
            ? 0
            : students.reduce((sum, s) => sum + s.score, 0) / total;

    stats.textContent =
        `Tổng sinh viên: ${total} | Điểm trung bình: ${avg.toFixed(2)}`;
}

function addStudent() {
    const name = nameInput.value.trim()
    const score = Number(scoreInput.value);

    if (name === "") {
        alert("Họ tên không được để trống");
        return;
    }

    if (isNaN(score) || score < 0 || score > 10) {
        alert("Điểm phải từ 0 đến 10");
        return;
    }

    students.push({
        name,
        score
    });

    renderTable();

    nameInput.value = "";
    scoreInput.value = "";
    nameInput.focus();
}

addBtn.addEventListener("click", addStudent);
scoreInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addStudent();
    }
});
tableBody.addEventListener("click", function (e) {

    if (e.target.tagName === "BUTTON") {

        const index = e.target.dataset.index;

        students.splice(index, 1);

        renderTable();
    }

});
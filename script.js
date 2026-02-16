let students = JSON.parse(localStorage.getItem("students")) || [];

function save() {
    localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
    let name = document.getElementById("name").value;

    if (!name) return alert("Enter student name");

    students.push({ name, present: 0, absent: 0 });
    document.getElementById("name").value = "";
    save();
    render();
}

function markAttendance(index, type) {
    if (type === "present") students[index].present++;
    else students[index].absent++;
    save();
    render();
}

function deleteStudent(index) {
    students.splice(index, 1);
    save();
    render();
}

function editStudent(index) {
    const current = students[index].name;
    const newName = prompt("Edit student name:", current);
    if (newName === null) return;
    const trimmed = newName.trim();
    if (!trimmed) return alert('Name cannot be empty');
    students[index].name = trimmed;
    save(); render();
}

function getPercentage(s) {
    let total = s.present + s.absent;
    return total === 0 ? 0 : ((s.present / total) * 100).toFixed(2);
}

function render() {
    let list = "";
    let defaulters = "";

    students.forEach((s, i) => {
        let percent = getPercentage(s);

        list += `
        <tr>
            <td>${s.name}</td>
            <td>${s.present}</td>
            <td>${s.absent}</td>
            <td>${percent}%</td>
            <td>
                <button class="present" onclick="markAttendance(${i},'present')">P</button>
                <button class="absent" onclick="markAttendance(${i},'absent')">A</button>
                <button class="edit" onclick="editStudent(${i})">Edit</button>
                <button class="delete" onclick="deleteStudent(${i})">Delete</button>
            </td>
        </tr>
        `;

        if (percent < 75 && (s.present + s.absent) > 0) {
            defaulters += `<li>${s.name} - ${percent}%</li>`;
        }
    });

    document.getElementById("studentList").innerHTML = list;
    document.getElementById("defaulters").innerHTML = defaulters;
}

render();
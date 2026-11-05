let students = [
  { id: 1, name: "Cristi Popesco", group: "TUNG-67", age: 34, specialty: "Hacker/Depanator PC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhfyAjVq0b2mjKL5oZYmXeJQfH3pnrd9d4deQ1nPP4D804F61TUjxjRA&s=10" },
  { id: 2, name: "Toma Alexandru", group: "HI-43", age: 22, specialty: "Introvertit", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iC55WIq7WoI0JSE9u-YRLmedPzjM8jz3_WVWM-lvfmyXLRyLqb31O12w&s=10" },
  { id: 3, name: "Sorin Parcalab", group: "BYE-32", age: 90, specialty: "Masonerist", image: "https://pegas.md/adminpanel/pub/media/catalog/product/1/a/1af666232256053199d80c238d234106.jpg" },
  { id: 4, name: "Sergiu Floraia", group: "OK-111", age: 21, specialty: "Scammer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0ChfAMeYkyjmpCjAEcwWPwuYNZPciMzZ0qSz_yJRhyE32ZnUTuZwAtU&s=10" }
];

const listEl = document.getElementById("students-list");
const countEl = document.getElementById("count");

function render() {
  if (students.length === 0) {
    listEl.innerHTML = '<p class="empty-message">No students in the list.</p>';
    countEl.textContent = 0;
    return;
  }

  let html = "";

  students.forEach(function (s) {
    html += `
      <div class="card">
        <div class="card-header">
          <img class="avatar" src="${s.image}" alt="Photo of ${s.name}">
          <div>
            <h3>${s.name}</h3>
            <small>Group: ${s.group}</small>
          </div>
        </div>
        <div class="row"><span>Age</span><strong>${s.age} years</strong></div>
        <div class="row"><span>Specialty</span><strong>${s.specialty}</strong></div>
        <div class="row"><span>Status</span><span class="status">Enrolled</span></div>
        <button class="delete-btn" data-id="${s.id}">Delete</button>
      </div>`;
  });

  listEl.innerHTML = html;
  countEl.textContent = students.length;
}

const form = document.getElementById("student-form");
const errorEl = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const group = document.getElementById("group").value.trim();
  const ageText = document.getElementById("age").value.trim();
  const specialty = document.getElementById("specialty").value.trim();
  const image = document.getElementById("image").value.trim();

  if (!name || !group || !ageText || !specialty || !image) {
    errorEl.textContent = "Please fill in all fields.";
    return;
  }

  const age = Number(ageText);
  if (!Number.isInteger(age) || age < 14 || age > 100) {
    errorEl.textContent = "Age must be a whole number between 14 and 100.";
    return;
  }

  const newId = students.length ? Math.max(...students.map(s => s.id)) + 1 : 1;

  students.push({ id: newId, name, group, age, specialty, image });

  errorEl.textContent = "";
  form.reset();
  render();
});

listEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const id = Number(e.target.dataset.id);
    students = students.filter(s => s.id !== id);
    render();
  }
});

document.querySelectorAll(".controls button").forEach(function (btn) {
  btn.addEventListener("click", function () {
    listEl.style[btn.dataset.prop] = btn.dataset.value;
  });
});

const gapRange = document.getElementById("gap-range");
const gapValue = document.getElementById("gap-value");

gapRange.addEventListener("input", function () {
  listEl.style.gap = gapRange.value + "px";
  gapValue.textContent = gapRange.value + "px";
});

render();
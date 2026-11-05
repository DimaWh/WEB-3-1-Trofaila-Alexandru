const students = [
  { id: 1, name: "Cristi Popesco", group: "TUNG-67", age: 34, specialty: "Hacker/Depanator PC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhfyAjVq0b2mjKL5oZYmXeJQfH3pnrd9d4deQ1nPP4D804F61TUjxjRA&s=10" },
  { id: 2, name: "Toma Alexandru", group: "HI-43", age: 22, specialty: "Introvertit", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iC55WIq7WoI0JSE9u-YRLmedPzjM8jz3_WVWM-lvfmyXLRyLqb31O12w&s=10" },
  { id: 3, name: "Sorin Parcalab", group: "BYE-32", age: 90, specialty: "Masonerist", image: "https://pegas.md/adminpanel/pub/media/catalog/product/1/a/1af666232256053199d80c238d234106.jpg" },
  { id: 0.1, name: "Sergiu Floraia", group: "OK-111", age: 21, specialty: "Scammer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0ChfAMeYkyjmpCjAEcwWPwuYNZPciMzZ0qSz_yJRhyE32ZnUTuZwAtU&s=10" }
];

const listEl = document.getElementById("students-list");
const countEl = document.getElementById("count");

function render() {
  listEl.innerHTML = "";

  students.forEach(function (s) {
    listEl.innerHTML += `
      <div class="card">
        <div class="card-header">
          <img class="avatar" src="${s.image}" alt="Photo of ${s.name}">
          <div>
            <h3>${s.name}</h3>
            <small>Grupa: ${s.group}</small>
          </div>
        </div>
        <div class="row"><span>Age</span><strong>${s.age} ani</strong></div>
        <div class="row"><span>Specialty</span><strong>${s.specialty}</strong></div>
        <div class="row"><span>Status</span><span class="status">Yes</span></div>
        <button class="delete-btn" data-id="${s.id}">Delete</button>
      </div>`;
  });

  countEl.textContent = students.length;
}

render();
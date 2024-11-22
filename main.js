let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let emptyimage = document.getElementById("empty");

if (tasks.length == 0) {
  emptyimage.style.display = "flex";
} else {
  emptyimage.style.display = "none";
}

function addTask() {
  let title = document.getElementById("title");
  let des = document.getElementById("des");
  let task = {
    title: title.value,
    description: des.value,
  };

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  title.value = "";
  des.value = "";

  console.log("Tasks saved:", tasks);
  getData();
}
function displayData(tasks) {
  getData(tasks);
}

function getData(tasks) {
  let cardContainer = document.getElementById("taskcard");
  cardContainer.innerHTML = "";

  // let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task, index) => {
    if (!task.title || !task.description) {
      console.log("Invalid task: Title or description is empty.");
      return;
    }
    let card = document.createElement("div");
    card.classList.add("task-card");

    let titleElement = document.createElement("h1");
    if (task.title == "") {
    } else {
      titleElement.innerText = task.title;
    }

    let descriptionElement = document.createElement("p");
    if (task.description == "") {
    } else {
      descriptionElement.innerText = task.description;
    }

    let deleteElement = document.createElement("button");
    deleteElement.innerText = "حذف";
    deleteElement.id = `delete-${index}`;
    card.appendChild(deleteElement);
    deleteElement.addEventListener("click", function () {
      card.remove();

      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
    card.appendChild(titleElement);

    card.appendChild(descriptionElement);
    card.className;
    cardContainer.appendChild(card);
  });
}
function filterTasks() {
  let searchTerm = document.getElementById("searchInput").value;
  console.log(searchTerm);
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let filteredTasks = tasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(searchTerm) ||
      task.description.toLowerCase().includes(searchTerm)
    );
  });
  displayData(filteredTasks);
}

window.onload = displayData(tasks);

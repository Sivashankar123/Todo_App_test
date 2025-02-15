function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskList = document.getElementById("task-list");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerText = taskInput.value;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.onclick = function() {
            li.classList.toggle("completed");
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
function addTaskWithTime() {
    let taskInput = document.getElementById("task-input");
    let taskList = document.getElementById("task-list");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");

        // Get current time
        let now = new Date();
        let timeString = now.toLocaleTimeString();

        // Set task text with timestamp
        li.innerText = `${taskInput.value} (Added at ${timeString})`;

        taskList.appendChild(li);
        taskInput.value = "";
    }
}


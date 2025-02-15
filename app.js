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


document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const clearButton = document.getElementById("clearButton");

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
            }
        });

    clearButton.addEventListener("click", function() {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
            }
        });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
             checkbox.addEventListener("change", function() {
                if (checkbox.checked) {
                    listItem.style.textDecoration = "line-through";
                 } else {
                    listItem.style.textDecoration = "none";
             }
            });
             const taskLabel = document.createElement("span");
            taskLabel.textContent = taskText;
            listItem.appendChild(checkbox);
            listItem.appendChild(taskLabel);
            taskList.appendChild(listItem);
            taskInput.value = "";
            }
        }
    });

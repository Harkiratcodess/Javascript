
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");
const pendingEmpty = document.getElementById("pendingEmpty");
const completedEmpty = document.getElementById("completedEmpty");
const totalCount = document.getElementById("totalCount");
const pendingCount = document.getElementById("pendingCount");
const doneCount = document.getElementById("doneCount");

function updateStats() {
    const total = document.querySelectorAll("li").length;
    const done = document.querySelectorAll("#completedList li").length;
    totalCount.innerText = total;
    pendingCount.innerText = total - done;
    doneCount.innerText = done;

    pendingEmpty.style.display = pendingList.querySelectorAll("li").length === 0 ? "block" : "none";
    completedEmpty.style.display = completedList.querySelectorAll("li").length === 0 ? "block" : "none";
}

function createTask(text) {
    const li = document.createElement("li");

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.innerText = "✓";

    const span = document.createElement("span");
    span.classList.add("task-text");
    span.innerText = text;

    const delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerText = "Delete";

    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(delBtn);

    checkBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
        if (li.classList.contains("completed")) {
            completedList.appendChild(li);
        } else {
            pendingList.appendChild(li);
        }
        updateStats();
    });

    delBtn.addEventListener("click", function () {
        li.remove();
        updateStats();
    });

    return li;
}

function addTask() {
    const text = input.value.trim();
    if (!text) return;
    pendingList.appendChild(createTask(text));
    input.value = "";
    input.focus();
    updateStats();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTask();
});

updateStats();
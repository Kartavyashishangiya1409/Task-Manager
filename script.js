let taskContainer = document.querySelector(".task");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
    let inputTask = document.getElementById("inputTask").value.trim();

    if (inputTask === "") {
        alert("Please enter a task.");
        return;
    }

    let taskBlock = document.createElement("div");
    taskBlock.setAttribute("class", "taskBlock");

    let text = document.createElement("div");
    text.setAttribute("class", "text");
    text.innerHTML = `<h3 style="color:white;">${inputTask}</h3>`;

    let delBtn = document.createElement("div");
    delBtn.setAttribute("class", "delBtn");

    let button = document.createElement("button");
    button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path fill="#fff" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17"/>
        </svg>
    `;

    button.addEventListener("click", () => {
        taskContainer.removeChild(taskBlock);
    });

    delBtn.appendChild(button);
    taskBlock.appendChild(text);
    taskBlock.appendChild(delBtn);
    taskContainer.appendChild(taskBlock);

    document.getElementById("inputTask").value = "";
});

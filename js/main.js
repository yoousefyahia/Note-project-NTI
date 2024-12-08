document.querySelector("#addBt").addEventListener("click", () => {
    const taskTitle = document.querySelector("#taskTitle").value;
    const taskDetails = document.querySelector("#taskDetails").value;
    const taskDate = document.querySelector("#taskDate").value;

    if (taskTitle && taskDetails && taskDate) {
        // Clear inputs
        document.querySelector("#taskTitle").value = "";
        document.querySelector("#taskDetails").value = "";
        document.querySelector("#taskDate").value = "";

        // Create task element
        const task = document.createElement("div");
        task.className = "task";

        // Add task content
        task.innerHTML = `
            <h2>${taskTitle}</h2>
            <p>${taskDetails}</p>
            <small>${taskDate}</small>
            <div class="actions">
               <button class="editBtn"><i class="fas fa-edit"></i></button>
              <button class="deleteBtn"><i class="fas fa-trash"></i></button>
            </div>
        `;

        // Delete function
        task.querySelector(".deleteBtn").addEventListener("click", () => {
            task.remove();
            updateTaskCounter();
        });

        // Edit function
        task.querySelector(".editBtn").addEventListener("click", () => {
            const newTitle = prompt("Edit Task Title", taskTitle);
            const newDetails = prompt("Edit Task Details", taskDetails);
            const newDate = prompt("Edit Task Date", taskDate);

            if (newTitle) {task.querySelector("h2").innerText = newTitle;}
            if (newDetails) {task.querySelector("p").innerText = newDetails;}
            if (newDate) {task.querySelector("small").innerText = newDate;}
        });

        // Append task to container
        document.querySelector("#tasksContainer").append(task);
        updateTaskCounter();
    } 

   else{
        alert("Please fill out all fields!");
    }
});
function updateTaskCounter() {
    const taskCount = document.querySelectorAll(".task").length;
    document.querySelector("#taskCounter").innerText = `Tasks Count: ${taskCount}`;
}
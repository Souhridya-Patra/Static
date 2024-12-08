// Function to add a new task
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    // Only add task if input is not empty
    if (taskText !== "") {
        var taskList = document.getElementById('taskList');
        
        // Create a new list item
        var li = document.createElement('li');
        
        // Create text node for the task
        var textNode = document.createTextNode(taskText);
        li.appendChild(textNode);

        // Create a delete button
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            li.remove(); // Remove task when button is clicked
        };

        li.appendChild(deleteButton);
        
        // Append the new task to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

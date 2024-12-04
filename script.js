document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Add a new task
    addButton.addEventListener('click', () => {
        const taskText = inputField.value.trim();
        if (taskText === '') return;

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Create task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';

        // Append elements to list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        // Clear input field
        inputField.value = '';

        // Event listener for marking task as completed
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                listItem.classList.add('completed');
                todoList.appendChild(listItem); // Move to bottom
            } else {
                listItem.classList.remove('completed');
            }
        });

        // Event listener for deleting task
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });
    });
});

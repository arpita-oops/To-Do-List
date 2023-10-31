document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('task-list');

    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && taskInput.value.trim() !== '') {
            const taskText = taskInput.value.trim();
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;

            listItem.querySelector('.delete').addEventListener('click', function() {
                listItem.remove();
            });

            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });
});

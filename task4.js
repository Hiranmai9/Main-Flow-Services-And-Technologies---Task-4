function addTask() {
    const taskText = document.getElementById('new-task').value.trim();
    if (taskText) {
        const ul = document.getElementById('task-list');
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${taskText}</span>
            <div class="task-buttons">
                <button class="complete-button" onclick="completeTask(this)">Done</button>
                <button class="delete-button" onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        
        ul.appendChild(li);
        document.getElementById('new-task').value = '';
    }
}

function completeTask(button) {
    const li = button.parentElement.parentElement;
    li.querySelector('span').style.textDecoration = 'line-through';
    button.disabled = true;
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}





const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');

    // ✅ Toggle completed state
    span.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    // ✅ Edit feature
    editBtn.addEventListener('click', () => {
        if (editBtn.textContent === 'Edit') {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.replaceChild(input, span);
            editBtn.textContent = 'Save';
        } else {
            const newText = li.querySelector('input').value.trim();
            span.textContent = newText;
            li.replaceChild(span, li.querySelector('input'));
            editBtn.textContent = 'Edit';
        }
    });

    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
});

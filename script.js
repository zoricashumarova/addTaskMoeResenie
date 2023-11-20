const inputEl = document.getElementById('newTask');
const btnEl = document.getElementById('addTaskBtn');
const listEl = document.getElementById('taskList');

const clickHandler = () => {
    const inputValue = inputEl.value;

    if (inputEl.value !== '') {
    const liEl = document.createElement('li');
    const spanEl = document.createElement('span');
    const completeBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    listEl.appendChild(liEl);
    liEl.appendChild(spanEl);

    spanEl.textContent = inputValue;
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    liEl.appendChild(completeBtn);
    liEl.appendChild(deleteBtn);

    inputEl.classList.remove('input-border');

    completeBtn.addEventListener('click', function() {
        spanEl.classList.add('btn-color');
    })

    deleteBtn.addEventListener('click', function() {
        liEl.remove();

    inputEl.value = ' ';
    })
  } else {
        inputEl.classList.add('input-border');
        inputHandler();
    }
}

btnEl.addEventListener('click', clickHandler);

const inputHandler = () => {
    if (inputEl.value) {
        btnEl.disabled = false;
    } else {
        btnEl.disabled = true;
    }
}

inputEl.addEventListener('input', inputHandler);
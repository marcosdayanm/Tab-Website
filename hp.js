function addTask() {
    const taskList = document.getElementById('taskList');

    const divInputGroup = document.createElement('div');
    divInputGroup.className = 'input-group m-3';

    const divInputGroupText = document.createElement('div');
    divInputGroupText.className = 'input-group-text';

    const inputRadio = document.createElement('input');
    inputRadio.className = 'form-check-input mt-0';
    inputRadio.type = 'radio';
    inputRadio.onclick = removeTask;

    divInputGroupText.appendChild(inputRadio);
    divInputGroup.appendChild(divInputGroupText);

    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.className = 'form-control';
    divInputGroup.appendChild(inputText);

    taskList.appendChild(divInputGroup);
}

function removeTask(event) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(event.target.closest('.input-group'));
}





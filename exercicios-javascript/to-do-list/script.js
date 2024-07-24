//seleção de elementos
const toDoForm = document.querySelector('#to-do-form')
const addTaskInput = document.querySelector('#add-task')
const editForm = document.querySelector('#edit-form')
const toDoList = document.querySelector('#to-do-list')
const cancelEdit = document.querySelector('#cancel-edit-btn')
const editButton = document.querySelector('#edit-form button')
const editTaskInput = document.querySelector('#edit-task')
const searchInput = document.querySelector('#search-input')
const eraseButton = document.querySelector('#erase-button')
const filterSelect = document.querySelector('#filter-select')

let oldInputValue

const error = document.querySelectorAll('.add-error')
//funções
function saveToDo(text, done = 0, save = 1) {
    const toDo = document.createElement('div')
    toDo.classList.add('to-do')

    const title = document.createElement('h2')
    title.innerHTML = text
    toDo.appendChild(title)

    const checkButton = document.createElement('button')
    const checkIcon = document.createElement('i')
    checkIcon.classList.add('fa-solid', 'fa-check')
    checkButton.classList.add('check-button')
    checkButton.appendChild(checkIcon)

    toDo.appendChild(checkButton)

    const editButton = document.createElement('button')
    editButton.classList.add('edit-button')
    const editIcon = document.createElement('i')
    editIcon.classList.add('fa-solid', 'fa-pen')
    editButton.appendChild(editIcon)

    toDo.appendChild(editButton)

    const removeButton = document.createElement('button')
    removeButton.classList.add('remove-button')
    const removeIcon = document.createElement('i')
    removeIcon.classList.add('fa-solid', 'fa-xmark')
    removeButton.appendChild(removeIcon)

    toDo.appendChild(removeButton)

    if (done) {
        toDo.classList.add('done')
    }
    if (save) {
        saveInLocaStorage({ text, done: 0 })
    }

    toDoList.appendChild(toDo)

    addTaskInput.value = ''

    addTaskInput.focus()
}

function toggleForms() {
    toDoList.classList.toggle('hide')
    toDoForm.classList.toggle('hide')
    editForm.classList.toggle('hide')

}

function updateToDo(text) {
    const toDos = document.querySelectorAll('.to-do')

    toDos.forEach(toDo => {
        let title = toDo.parentElement.querySelector('h2')

        if (title.innerText === oldInputValue) {
            title.innerText = text
        } else {
            title.innerText = text
        }
    });
}

function getSearchToDos(search) {
    const toDos = document.querySelectorAll('.to-do')

    toDos.forEach(todo => {
        let toDoTitle = todo.querySelector('h2').innerText.toLowerCase()
        const normalized = search.toLowerCase()

        todo.style.display = 'flex'

        if (!toDoTitle.includes(normalized)) {
            todo.style.display = 'none'
        }
    })
}

function filter(selectValue) {
    const todos = toDoList.querySelectorAll('.to-do')
    todos.forEach(todo => todo.style.display = 'none')

    switch (selectValue) {
        case 'all':
            todos.forEach(todo => todo.style.display = 'flex')
            break
        case 'done':
            todos.forEach(todo => {
                if (todo.classList.contains('done')) todo.style.display = 'flex'
            })
            break;

        case 'to-do':
            todos.forEach(todo => {
                if (todo.classList.contains('to-do')) todo.style.display = 'flex'
            })
            break;
    }
}
//eventos
toDoForm.addEventListener('submit', e => {
    e.preventDefault()

    const addtaskValue = addTaskInput.value
    if (!addtaskValue) {
        error.forEach(div => {
            div.style.display = 'block'
        })
    } else {
        saveToDo(addtaskValue)
    }
})
let title
document.addEventListener('click', e => {
    if (e.target.classList.contains('check-button')) {
        e.target.parentElement.classList.toggle('done')

        updateToDoStatusLocalStorage(e.target.parentElement.querySelector('h2').innerText)
    }
    if (e.target.classList.contains('remove-button')) {
        let parentButton = e.target.parentElement
        toDoList.removeChild(parentButton)

        removeToDoLocalStorage(e.target.parentElement.querySelector('h2').innerText)
    }
    if (e.target.classList.contains('edit-button')) {
        e.preventDefault()

        toggleForms()

        title = e.target.parentElement.querySelector('h2')

        editTaskInput.value = title.innerText

        editTaskInput.focus()

        updateToDoLocalStorage()
    }
})
cancelEdit.addEventListener('click', e => {
    e.preventDefault()

    toggleForms()
})

editForm.addEventListener('submit', e => {
    e.preventDefault()

    title.innerHTML = editTaskInput.value
    console.log(title)

    toggleForms()
})

eraseButton.addEventListener('click', e => {
    e.preventDefault()

    searchInput.value = ''

    getSearchToDos('')
})

searchInput.addEventListener('keyup', e => {
    const searchValue = e.target.value

    getSearchToDos(searchValue)
})

filterSelect.addEventListener('change', e => {
    const selectValue = e.target.value

    filter(selectValue)
})
/*
const todos = toDoList.querySelectorAll('.to-do')
    todos.forEach(todo => todo.style.display = 'flex')

    if (selectValue === 'done') {
        todos.forEach(todo => {
            if (!todo.classList.contains('done')) todo.style.display = 'none'
        })
    }
    if (selectValue === 'to-do') {
        todos.forEach(todo => {
            if (todo.classList.contains('done')) todo.style.display = 'none'
        })
    }
*/
//local storage
function getTodosLocalStorage() {
    const todos = JSON.parse(localStorage.getItem('to-dos')) || []

    return todos
}

function saveInLocaStorage(todo) {
    const todos = getTodosLocalStorage()

    todos.push(todo)

    localStorage.setItem('to-dos', JSON.stringify(todos))
}

function loadToDos() {
    const toDos = getTodosLocalStorage()

    toDos.forEach(todo => {
        saveToDo(todo.text, todo.done, 0)
    })
}

function removeToDoLocalStorage(toDoText) {
    const todos = getTodosLocalStorage()

    const filteredToDos = todos.filter(todo => todo.text !== toDoText)

    localStorage.setItem('to-dos', JSON.stringify(filteredToDos))
}

function updateToDoStatusLocalStorage(toDoText) {
    const todos = getTodosLocalStorage()

    todos.map(todo => todo.text === toDoText ? todo.done = !todo.done : null)

    localStorage.setItem('to-dos', JSON.stringify(todos))
}

function updateToDoLocalStorage(toDoOldText,todoNewText) {
    const todos = getTodosLocalStorage()

    todos.map(todo => todo.text === toDoOldText ? (todo.text = todoNewText) : null)

    localStorage.setItem('to-dos', JSON.stringify(todos))
}
loadToDos()
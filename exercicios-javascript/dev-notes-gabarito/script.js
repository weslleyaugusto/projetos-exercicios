//Seleção de elementos
const notescontainer = document.querySelector('#notes-container')
const noteInput = document.querySelector('#note-content')
const addNoteBtn = document.querySelector('#add-note')
const searchInput = document.querySelector('#search-input')
const exportBtn = document.querySelector('#export-notes')

//Funções
function showNotes() {
    cleanNotes()

    getNotes().forEach(note => {
        const noteElement = createNote(note.id, note.content, note.fixed)

        notescontainer.appendChild(noteElement)
    });
}

function cleanNotes() {
    notescontainer.replaceChildren([])
}

function addNote() {
    const notes = getNotes()

    const noteObject = {
        id: generateId(),
        content: noteInput.value,
        fixed: false
    }

    const noteElement = createNote(noteObject.id, noteObject.content)
    notescontainer.appendChild(noteElement)

    notes.push(noteObject)

    saveNotes(notes)

    noteInput.value = ''

    noteInput.focus()
}

function generateId() {
    return Math.floor(Math.random() * 5000)
}

function createNote(id, content, fixed) {
    const note = document.createElement('div')
    note.classList.add('note')
    note.id = id

    const textarea = document.createElement('textarea')
    textarea.value = content
    textarea.placeholder = 'Adicione algum texto'
    note.appendChild(textarea)

    const pinIcon = document.createElement('i')
    pinIcon.classList.add('bi', 'bi-pin')
    note.appendChild(pinIcon)

    const xIcon = document.createElement('i')
    xIcon.classList.add('bi', 'bi-x-lg')
    note.appendChild(xIcon)

    const copyIcon = document.createElement('i')
    copyIcon.classList.add('bi', 'bi-file-earmark-plus')
    note.appendChild(copyIcon)

    if (fixed) note.classList.add('fixed')

    //Eventos de elemento
    textarea.addEventListener('keyup', e => {
        const noteContent = e.target.value

        updateNote(id, noteContent)
    })

    pinIcon.addEventListener('click', () => {
        toggleFixNote(id)
    })

    xIcon.addEventListener('click', () => {
        deleteNote(id, note)
    })

    copyIcon.addEventListener('click', () => {
        copyNote(id)
    })

    return note
}

function toggleFixNote(id) {
    const notes = getNotes()

    const targetNote = notes.filter(note => note.id === id)[0]

    targetNote.fixed = !targetNote.fixed

    saveNotes(notes)

    showNotes()
}

function deleteNote(id, note) {
    const notes = getNotes().filter(note => note.id !== id)
    saveNotes(notes)
    notescontainer.removeChild(note)
}

function copyNote(id) {
    const notes = getNotes()
    const targetNote = notes.filter(note => note.id === id)[0]

    const noteObject = {
        id: generateId(),
        content: targetNote.content,
        fixed: false
    }

    const note = createNote(noteObject.id, noteObject.content, noteObject.fixed)

    notescontainer.appendChild(note)

    notes.push(noteObject)

    saveNotes(notes)
}
function updateNote(id, content) {
    const notes = getNotes()

    const targetNote = notes.filter(note => note.id === id)[0]

    targetNote.content = content

    saveNotes(notes)
}

function searchNote(value) {
    const results = getNotes().filter(note => {
        return note.content.includes(value)
    })

    if (value !== '') {
        cleanNotes()

        results.forEach(note => {
            const noteElement = createNote(note.id, note.content)

            notescontainer.appendChild(noteElement)
        })
    }
    else {
        cleanNotes()

        showNotes()
    }

    return
}

function exportData() {
    const notes = getNotes()

    const csvString = [
        ["ID", "Conteúdo", "Fixado?"],
        ...notes.map((note) => [note.id, note.content, note.fixed]),
    ].map((e) => e.join(",")).join("\n")

    const link = document.createElement('a')
    link.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvString)
    link.target = '_blank'
    link.download = 'notes.csv'

    link.click()
}


function getNotes() {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]')
    const orderedNotes = notes.sort((a, b) => (a.fixed > b.fixed ? -1 : 1))

    return orderedNotes
}

function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Eventos
addNoteBtn.addEventListener('click', () => addNote())

noteInput.addEventListener('keydown', e => {
    if (e.code === 'Enter') addNote()
})

searchInput.addEventListener('keyup', e => {
    const search = e.target.value

    searchNote(search)
})

exportBtn.addEventListener('click', () => exportData())

//Inicialização
showNotes()
'use strict';
import storageService from '../../../services/storageService.js';
import { getRandomId } from "../../../services/utils.js";
import Note from './Note.js'
import { notesData } from './Notes.js'

export default {
    getNoteById,
    getNotes,
    createNotes,
    addNote,
    deleteNote,
    editNoteColor,
    togglePinned,
    copyNote,
    editNote,
    addTodo,
    deleteTodo,
    toggleToDoIsDone
}

let gNotes = storageService.load('gNotes') || createNotes();



function getNoteById(noteId) {
    let Note = gNotes.find(Note => Note.id === noteId)
    return Promise.resolve({ ...Note })
}

function getNotes(filterBy) {
    return filterNotes(filterBy);
}

function createNotes() {
    let notes = notesData.reduce((acc, Note) => {
        return [...acc, Note]
    }, [])
    storageService.store('gNotes', notes)
    return notes
}


function addNote(note) {

    let info;
    switch (note.type) {
        case "noteText":
            info = {
                txt: note.textInput,
                backgroundColor: "#fff8dc"
            }
            break;
        case "noteVideo":
            info = {
                label: note.textInput,
                url: note.urlInput,
                backgroundColor: "#fff8dc"
            }
            break;
        case "noteImg":
            info = {
                title: note.textInput,
                url: note.urlInput,
                backgroundColor: "#fff8dc"
            }
            break;
        case "noteTodos":
            info = {
                label: note.textInput,
                todos: [{ id: getRandomId(), txt: '', isDone: false }],
                backgroundColor: "#fff8dc"
            }
            break;
        default:
            info = {
                txt: note.textInput,
                backgroundColor: "#fff8dc"
            }
            break;
    }

    let newNote = new Note(note.type, info)
    gNotes = [...gNotes, newNote]
    storageService.store('gNotes', gNotes)
    return Promise.resolve(newNote)
}

function deleteNote(noteId) {
    gNotes = gNotes.filter((currNote) => currNote.id !== noteId)
    storageService.store('gNotes', gNotes);
    return Promise.resolve(true)
}

function editNoteColor(noteId, backgroundColor) {
    let editNote = gNotes.find(note => note.id === noteId)
    let info = editNote.info;
    info = { ...info, backgroundColor }
    editNote = { ...editNote, info }
    gNotes = gNotes.map(note => editNote.id === note.id ? editNote : note);
    storageService.store('gNotes', gNotes)
    return Promise.resolve(editNote)
}

function copyNote(noteId) {
    let copiedNote = gNotes.find(note => note.id === noteId)
    copiedNote = { ...copiedNote };
    copiedNote.id = getRandomId();
    gNotes = [...gNotes, copiedNote]
    storageService.store('gNotes', gNotes)
    return Promise.resolve(copiedNote)
}

function togglePinned(note) {
    note.isPinned = !note.isPinned
    gNotes = gNotes.map(currNote => currNote.id === note.id ? note : currNote);
    console.log(note);
    storageService.store('gNotes', gNotes);
    console.log(gNotes);

    return Promise.resolve()
}
function editNote(noteId, text, todoId) {
    let editNote = gNotes.find(note => note.id === noteId)

    let info = editNote.info;
    let label, txt, title, todos, editTodo;
    switch (editNote.type) {
        case 'noteText': txt = text; info = { ...info, txt }; break;
        case 'noteImg': title = text; info = { ...info, title }; break;
        case 'noteVideo': label = text; info = { ...info, label }; break;
        case 'noteTodos':
            if (!todoId) {
                label = text
                info = { ...info, label };
            } else {
                editTodo = editNote.info.todos.find(todo => todo.id === todoId);
                txt = text;
                editTodo = { ...editTodo, txt };
                todos = editNote.info.todos;
                todos = todos.map(todo => todo.id === editTodo.id ? editTodo : todo);
                info = { ...info, todos };
            }
            break;
    }
    editNote = { ...editNote, info };
    gNotes = gNotes.map(note => editNote.id === note.id ? editNote : note);
    storageService.store('gNotes', gNotes);
    return Promise.resolve(editNote)
}


function addTodo(noteId) {
    let currNote = gNotes.find(note => note.id === noteId)
    var newTodo = { id: getRandomId(), txt: "", isDone: false }
    currNote.info.todos = [...currNote.info.todos, newTodo];
    gNotes = gNotes.map(note => currNote.id === note.id ? currNote : note)
    storageService.store('gNotes', gNotes);
    return Promise.resolve(currNote);
}

function deleteTodo(noteId, todoId) {
    let currNote = gNotes.find(note => note.id === noteId)
    let todos = currNote.info.todos.filter(todo => todo.id !== todoId)
    let info = { ...currNote.info, todos }
    currNote = { ...currNote, info }
    gNotes = gNotes.map(note => currNote.id === note.id ? currNote : note)
    storageService.store('gNotes', gNotes);
    return Promise.resolve(true)
}


function filterNotes(filterBy) {

    if (!filterBy) return Promise.resolve([...gNotes]);

    return Promise.resolve(gNotes.filter(note => {
        switch (note.type) {
            case 'noteText': return note.info.txt.toUpperCase().includes(filterBy.toUpperCase());
            case 'noteImg': return note.info.title.toUpperCase().includes(filterBy.toUpperCase());
            case 'noteVideo': return note.info.label.toUpperCase().includes(filterBy.toUpperCase());
            case 'noteTodos': return note.info.label.toUpperCase().includes(filterBy.toUpperCase());

        }

    }))
}

function toggleToDoIsDone(noteId, todoId) {
    let editNote = gNotes.find(note => note.id === noteId);
    let editTodo = editNote.info.todos.find(todo => todo.id === todoId)
    editTodo.isDone = !editTodo.isDone;
    let todos = editNote.info.todos;
    todos = todos.map(todo => todo.id === editTodo.id ? editTodo : todo);
    let info = editNote.info;
    info = { ...info, todos };
    editNote = { ...editNote, info };
    gNotes = gNotes.map(note => editNote.id === note.id ? editNote : note);
    storageService.store('gNotes', gNotes);
    return Promise.resolve(editTodo)

}


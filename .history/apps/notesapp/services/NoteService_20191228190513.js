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
    isPinned,
    copyNote,
    editNote,
    addTodo,
    deleteTodo
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
        case "noteImage":
            info = {
                title: note.textInput,
                url: note.urlInput,
                backgroundColor: "#fff8dc"
            }
            break;
        case "noteTodo":
            info = {
                label: note.textInput,
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
    gNotes = [newNote, ...gNotes]
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
    editNote = { ...editNote };
    info = editNote.info.backgroundColor;
    info = { ...info, backgroundColor }
    editNote.info.backgroundColor = color;
    gNotes = [...gNotes, editNote]
    gNotes = gNotes.map(note => editNote.id === note.id ? editNote : note);
    storageService.store('gNotes', gNotes)
    return Promise.resolve(editNote)
}

function copyNote(note) {
    let copiedNote = gNotes.find(note => note.id === noteId)
    copiedNote = { ...copiedNote };
    copiedNote.id = getRandomId();
    gNotes = [...gNotes, copiedNote]
    gNotes = gNotes.map(note => copiedNote.id === note.id ? copiedNote : note);
    storageService.store('gNotes', gNotes)
    return Promise.resolve(copiedNote)
}

function isPinned(noteId) {
    let note = getNoteById(noteId)
    if (!note.isPinned) { note.isPinned = true }
    else note.isPinned = false
    gNotes = [...gNotes];
    gNotes.unshift(note);
    storageService.store('gNotes', gNotes);
    return Promise.resolve(true)
}
function editNote(id, text) {
    let editNote = gNotes.find(note => note.id === id)

    let info = editNote.info;
    switch (editNote.type) {
        case 'noteText': let txt = text; info = { ...info, txt }; break;
        case 'noteImg': let title = text; info = { ...info, title }; break;
        case 'noteVideo': let label = text; info = { ...info, label }; break;
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
    gNotes = [...gNotes, currNote];
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
        }

    }))
}


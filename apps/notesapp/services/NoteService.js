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
    copyNote
}

let gNotes = storageService.load('gNotes') || createNotes();



function getNoteById(noteId) {
    let Note = gNotes.find(Note => Note.id === noteId)
    return Promise.resolve({ ...Note })
}

function getNotes() {
    return Promise.resolve([...gNotes])
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
                txt: note.textInput
            }
            break;
        case "noteVideo":
            info = {
                label: note.textInput,
                url: note.urlInput
            }
            break;
        case "noteImage":
            info = {
                title: note.textInput,
                url: note.urlInput
            }
            break;
        case "noteTodo":
            info = {
                title: note.textInput
            }
            break;
        default:
            info = {
                txt: note.textInput
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

function editNoteColor(noteId, color) {
    let editNote = gNotes.find(note => note.id === noteId)
    editNote = { ...editNote };
    editNote.style.backgroundColor = color;
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
    if (!note.isPinned) {note.isPinned = true}
    else note.isPinned = false
    gNotes = [...gNotes];
    gNotes.unshift(note);
    storageService.store('gNotes', gNotes);
    return Promise.resolve(true)
}

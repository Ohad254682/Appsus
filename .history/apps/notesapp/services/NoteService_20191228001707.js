'use strict';
import storageService from '../../../services/storageService.js';
import Note from './Note.js'
import { notesData } from './Notes.js'

export default {
    getNoteById,
    getNotes,
    createNotes,
    addNote,
    deleteNote,
    editNote
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
    return notesData.reduce((acc, Note) => {
        return [...acc, Note]
    }, [])
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

function editNote(id , name, imgUrl){
    let editNote = gNotes.find(note=>note.id === id)

    editNote = {...editPet , name , imgUrl};

    // gpets = gPets.map(pet=>  pet);
    gNotes = gNotes.map(note=> editPet.id === pet.id ? editPet : pet);

    storageService.store('gNotes', gNotes);

    return Promise.resolve(editPet)
}


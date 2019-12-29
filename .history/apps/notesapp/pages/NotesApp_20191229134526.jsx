import SearchNote from "../cmps/SearchNote.jsx";
import AddNote from "../cmps/AddNote.jsx";
import NotesList from "../cmps/NotesList.jsx";
import noteService from "../services/NoteService.js";

export default class NotesApp extends React.Component {

    state = {
        currNote: null,
        filterBy: '',
        notes: []
    }

    componentDidMount() {
        this.onLoadNotes();
    }

    onSelectNote = (note) => {
        this.setState({ currNote: note })
    }

    removeSelectedNote = () => {
        this.setState({ currNote: null })
    }

    onTogglePinned = (note) => {
        console.log(note);        
        noteService.togglePinned(note).then(()=> this.onLoadNotes());
    }

    onCopyNote = (note) => {
        noteService.copyNote(note.id).then(this.onLoadNotes());
    }

    onAddNote = (addedNote) => {
        noteService.addNote(addedNote)
            .then(addedNote => {
                this.setState({ currNote: addedNote })
            })
            .then(this.onLoadNotes);
    }

    setFilterBy = (filterBy) => {
        this.setState({ filterBy })
        this.loadNotes(filterBy);
    }

    onDeleteNote = (noteId) => {
        noteService.deleteNote(noteId);
        this.onLoadNotes();
    }

    loadNotes = (filterBy) => {
        noteService.getNotes(filterBy)
            .then(notes => { 
                this.setState({ notes }) 
            })
    }

    onLoadNotes = () => {
        this.loadNotes(this.state.filterBy);
    }

    render() {
        return <React.Fragment>
            <div className="container notes-page-container">
                <header>
                    <SearchNote setFilterBy={this.setFilterBy}></SearchNote>
                    <AddNote onAddNote={this.onAddNote} />
                </header>
                <NotesList onLoadNotes={this.onLoadNotes} setFilterBy={this.setFilterBy} onDeleteNote={this.onDeleteNote} notes={this.state.notes} onAddNote={this.props.onAddNote} onChangeColor={this.onChangeColor} onSelectNote={this.onSelectNote} onCopyNote={this.onCopyNote} onTogglePinned={this.onTogglePinned}/>
            </div>
        </React.Fragment>
    }
}
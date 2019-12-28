import SearchNote from "../cmps/SearchNote.jsx";
import AddNote from "../cmps/AddNote.jsx";
import NotesList from "../cmps/NotesList.jsx";
import noteService from "../services/noteService.js";

export default class NotesApp extends React.Component {

    state = {
        currNote: null,
        filterBy: '',
        notes: []
    }

    componentDidMount() {
        this.onLoadNotes();
    }

    // componentDidUpdate(prevState) {
    //     if (prevState.currNote !== this.state.currNote) {
    //         this.loadNotes();
    //     }
    // }

    onAddNote = (addedNote) => {
        noteService.addNote(addedNote)
            .then(addedNote => {
                this.setState({ currNote: addedNote })
            })
            .then(this.onLoadNotes());
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
            .then(notes => { this.setState({ notes }) })
    }

    onLoadNotes = () => {
        this.loadNotes(this.state.filterBy);
    }

    render() {
        return <React.Fragment>
            <div className="notes-page-container">
                <header>
                    <SearchNote setFilterBy={this.setFilterBy}></SearchNote>
                    <AddNote onAddNote={this.onAddNote} />
                </header>
                <NotesList onLoadNotes={this.onLoadNotes} setFilterBy={this.setFilterBy} onDeleteNote={this.onDeleteNote} notes={this.state.notes} onAddNote={this.props.onAddNote} />
            </div>
        </React.Fragment>
    }
}
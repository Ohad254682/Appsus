import SearchNote from "../cmps/SearchNote.jsx";
import AddNote from "../cmps/AddNote.jsx";
import NotesList from "../cmps/NotesList.jsx";
import NoteService from "../services/NoteService.js";

export default class NotesApp extends React.Component {

    state = {
        notes: [],
        filterBy: ''
    }

    componentDidMount() {
        this.onLoadNotes;
    }

    setFilterBy = (filterBy) => {
        this.setState({ filterBy }, this.loadNotes(filterBy))
    }

    onDeleteNote = (noteId) => {
        NoteService.deleteNote(noteId);
        this.loadNotes();
    }

    loadNotes = (filterBy) => {
        NoteService.getNotes(filterBy)
            .then(notes => {
                this.setState({ notes })
            })
    }

    onLoadNotes = () => {
        this.loadNotes(this.state.filterBy)
    }

    render() {
        return <React.Fragment>
            <div className="notes-page-container">
                <header>
                    <SearchNote />
                    <AddNote />
                </header>
                <NotesList setFilterBy={this.setFilterBy} onDeleteNote={this.onDeleteNote} notes={this.state.notes} />
            </div>
        </React.Fragment>
    }
}
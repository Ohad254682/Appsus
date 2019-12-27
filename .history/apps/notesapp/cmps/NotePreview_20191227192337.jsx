import NoteService from "../services/NoteService.js";
import DynamicCmps from "../cmps/dynamic/DynamicCmps.jsx";



export default class NotePreview extends React.Component {

    state = {
        isEditMode: false
    }

    componentDidMount() {
    }

    onIconOfNote = () => {
        let ICON = '';
        switch (this.props.note.type) {
            case 'noteText': ICON = 'A'; break;
            case "noteImg": ICON = '🖼'; break;
            case "noteTodos": ICON = '🖹'; break;
            case "noteVideo": ICON = '‣'; break;
        }
        return ICON;
    }


    onDeleteNote = (ev) => {
        this.props.onDeleteNote(this.props.note.id);
        ev.stopPropagation();
    }

    onEditMode = (ev) => {
        if (this.state.isEditMode) {
            ev.target.removeAttribute('disabled');
            ev.stopPropagation();
        }
        else(!this.state.isEditMode) {
            ev.target.setAttribute('disabled');
            ev.stopPropagation();
        }
    }

    onEditModeDisabled = (ev) => {
       
    }

    onSetEditMode = (prevState) => {
        this.setState({ isEditMode: !prevState.isEditMode });
    }


    render() {
        if (!this.props.note) return null;

        const type = this.props.note.type;
        const note = this.props.note;

        return (
            <article className="cards-container">
                <DynamicCmps type={type} note={note}></DynamicCmps>
                <div className="tools-bar">
                    <button onClick={this.onSetEditMode}>Edit</button>
                    <p className="note-icon">{this.onIconOfNote()}</p>
                    <button className="note-btn" onClick={this.onDeleteNote}>🗑️</button>
                </div>
            </article>
        )
    }
}
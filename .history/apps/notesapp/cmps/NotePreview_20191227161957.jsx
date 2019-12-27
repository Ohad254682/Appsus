import NoteService from "../services/NoteService.js";
import DynamicCmps from "../cmps/dynamic/DynamicCmps.jsx";



export default class NotePreview extends React.Component {

    state = {
    }

    componentDidMount() {
    }


    onDeleteNote = (ev) => {
        this.props.onDeleteNote(this.props.note.id);
        ev.stopPropagation();
    }

    render() {
        if (!this.props.note) return null;

        const type = this.props.note.type;
        const note = this.props.note;
        
        return (          
            <article className="cards-container">
                <DynamicCmps type={type} note={note}></DynamicCmps>
                <button onClick={this.onDeleteNote}>🗑️</button>
            </article>
        )}
}
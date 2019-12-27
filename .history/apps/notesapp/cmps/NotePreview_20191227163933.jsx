import NoteService from "../services/NoteService.js";
import DynamicCmps from "../cmps/dynamic/DynamicCmps.jsx";



export default class NotePreview extends React.Component {

    state = {
    }

    componentDidMount() {
        this.onIconOfNote();
    }

    onIconOfNote = () => {
        const ICON;
       switch(this.props.note.type){
           case 'noteText':icon='';break;
           case "noteImg": return '';break;
           case "noteTodos"
           "noteVideo"

       }
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
                <div>
                    <button onClick={this.onDeleteNote}>🗑️</button>
                    <p></p>
                </div>
            </article>
        )
    }
}
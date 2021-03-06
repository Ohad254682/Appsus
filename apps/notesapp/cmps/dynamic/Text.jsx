import noteService from "../../services/NoteService.js";

export default class Text extends React.Component {
    txt = this.props.note.info.txt;

    state = {
        textarea: this.props.note.info.txt
    }

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value });
        noteService.editNote(this.props.note.id, value)
        .then(this.props.onLoadNotes);
    }

    render() {
        return <div>
            <textarea type="text" name="textarea" className="textarea-note" rows="14" cols="50" type="text" onChange={this.onChangeInput} value={this.state.textarea} disabled={this.props.isEditMode ? false : true}></textarea>
        </div>
    }
}





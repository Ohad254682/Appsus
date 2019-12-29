import noteService from "../../services/NoteService.js";
export default class Image extends React.Component  {
    
    state = {
        textarea: this.props.note.info.title
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
            <textarea className="textarea-note" type="text" name="textarea" onChange={this.onChangeInput} value={this.state.textarea} disabled={this.props.isEditMode ? false : true}></textarea>
            <img src={this.props.note.info.url} />
        </div>
    }
}



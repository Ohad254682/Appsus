import noteService from "../../services/NoteService.js";
export default class Todo extends React.Component {

    todos = this.props.note.info.todos;

    state = {
        label: this.props.note.info.label
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
            <input type="text" className="textarea-note" name="label" type="text" placeholder="my to-do list" onChange={this.onChangeInput} value={this.state.label} disabled={this.props.isEditMode ? false : true}></input>
            <ul>
                {this.props.note.info.todos.map(todo =>
                    <TodoTask todo={todo}></TodoTask>)}
            </ul>
            <button className="note-btn green" onClick={this.onAddTodo}>+</button>

        </div>
    }
}

import noteService from "../services/NoteService.js";
export default class TodoTask extends React.Component {


    state = {
        textarea: this.props.todo.txt,

    }

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value });
        noteService.editNote(this.props.note.id, value, this.props.todo.id)
            .then(this.props.onLoadNotes);
    }

    onDeleteTodo = (ev, todoId) => {
        noteService.deleteTodo(this.props.note.id, todoId)
            .then(this.props.onLoadNotes);
        ev.stopPropagation();
    }

    onToggleTodoIsDone = () => {
        if (!this.props.isEditMode) {
            noteService.toggleToDoIsDone(this.props.note.id, this.props.todo.id)
                .then(this.props.onLoadNotes);
        }

    }



    render() {
        return (<li key={this.props.todo.id} className="todolist">
            <div onClick={this.onToggleTodoIsDone}>
                <input type="text" placeholder="write something..." name="textarea" className={this.props.todo.isDone ? 'todo-isdone textarea-note' : 'textarea-note'} type="text" onChange={this.onChangeInput} value={this.state.textarea} disabled={this.props.isEditMode ? false : true}></input>
                <button className="note-btn" onClick={() => this.onDeleteTodo(event, this.props.todo.id)}>🗑️</button>
            </div>
        </li>)
    }
}
import noteService from "../../services/NoteService.js";
export default class Todo extends React.Component {

    todos = this.props.note.info.todos;

    state = {
        textarea: this.props.note.info.txt
    }

    onAddTodo = () => {
        noteService.addTodo(this.props.note.id)
            .then(this.props.onLoadNotes);
    }

    onDeleteTodo = (todoId) => {
        noteService.deleteTodo(this.props.note.id, todoId)
            .then(this.props.onLoadNotes);
    }

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value });
        // noteService.editNote(this.props.note.id, value)
        // .then(this.props.onLoadNotes());
    }

    render() {
        return <div>
            <p>{this.props.note.info.label}</p>
            <ul>
                {this.props.note.info.todos.map(todo =>
                    <li key={todo.id}>
                        <input type="text" name="textarea" className=" className={todo.isDone ? 'todo-isdone todolist textarea-note' : 'todolist textarea-note'}" type="text" onChange={this.onChangeInput} value={this.state.textarea} disabled={this.props.isEditMode ? false : true}></input>
                        <button onClick={() => this.onDeleteTodo(todo.id)}>Delete</button></li>)}
            </ul>
            <button onClick={this.onAddTodo}>+</button>

        </div>
    }
}

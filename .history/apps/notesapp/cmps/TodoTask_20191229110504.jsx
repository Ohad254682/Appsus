import noteService from "../services/NoteService.js";
export default class TodoTask extends React.Component {


    render() {
        return <li key={this.props.todo.id} className="todolist">
            <input type="text" placeholder="write something..." name="textarea" className={todo.isDone ? 'todo-isdone textarea-note' : 'textarea-note'} type="text" onChange={this.onChangeInput} value={this.state.textarea} disabled={this.props.isEditMode ? false : true}></input>
            <button className="note-btn" onClick={() => this.onDeleteTodo(todo.id)}>🗑️</button></li>)
    }
}
}
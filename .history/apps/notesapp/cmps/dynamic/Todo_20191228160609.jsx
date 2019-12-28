import noteService from "../../services/NoteService.js";
export default class Todo extends React.Component {

    todos = this.props.note.info.todos;

    onAddTodo = () => {
        noteService.addTodo(this.props.note.id)
            .then(this.props.onLoadNotes());
    }

    onDeleteTodo=()=>{

    }

    render() {
        return <div>
            <p>{this.props.note.info.label}</p>
            <ul>
                {this.props.note.info.todos.map(todo => <li className={todo.isDone ? 'todo-isdone todolist' : 'todolist'} key={todo.id}>{todo.txt} <button onClick={this.onDeleteTodo}>-</button></li>)}
            </ul>
            <button onClick={this.onAddTodo}>+</button>

        </div>
    }
}

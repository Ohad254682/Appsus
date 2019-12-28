import noteService from "../../services/NoteService.js";
export default class Todo extends React.Component {

    todos = this.props.note.info.todos;

    addTodo=()=>{
        noteService.addTodo(this.props.note.id)
        .then()
    }

    render() {
        return <div>
            <p>{this.props.note.info.label}</p>
            <ul>
                {this.props.note.info.todos.map(todo => <li className={todo.isDone ? 'todo-isdone' : ''} key={todo.id}>{todo.txt}</li>)}
            </ul>
            <button onClick={this.addTodo}>+</button>

        </div>
    }
}

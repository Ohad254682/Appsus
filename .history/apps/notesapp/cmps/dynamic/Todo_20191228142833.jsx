export default class Todo extends React.Component {

    todos = this.props.note.info.todos;

render(){
    return <div>
        <p>{this.props.note.info.label}</p>
        <ul>
            <li className={todo.isDone && 'todo-isdone'}>{this.props.note.info.todos[0].txt}</li>
            <li className={todo.isDone && 'todo-isdone'}>{this.props.note.info.todos[1].txt}</li>
            </ul>
        
    </div>
}
}

// <ul>{this.props.note.info.todos.forEach((todo) => <li  key={todo.id}>{todo.txt}</li>)}</ul>
// className={todo.isDone && 'todo-isdone'}
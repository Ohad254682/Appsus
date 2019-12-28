export default class Todo extends React.Component {

    todos = this.props.note.info.todos;

render(){
    return <div>
        <p>{this.props.note.info.label}</p>
        <ul>
           {this.props.note.info.todos.map(todo=><li key={todo.id}>{todo.txt}</li>)}
            </ul>
        
    </div>
}
}

// <ul>{this.props.note.info.todos.forEach((todo) => <li  {todo.txt}</li>)}</ul>
// className={todo.isDone && 'todo-isdone'}
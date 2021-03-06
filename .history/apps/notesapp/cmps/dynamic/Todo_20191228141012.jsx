export default class Todo extends React.Component {

    todos = this.props.note.info.todos;

render(){
    return <div>
        <p>{props.note.info.label}</p>
        <ul>{todos.forEach((todo) => { <li className={todo.isDone && 'todo-isdone'} key={todo.id}>{todo.txt}</li> })}</ul>
    </div>
}
}
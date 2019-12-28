export default class Todo extends React.Component {

    todos = props.note.info.todos;

render(){
    return <div>
        <p>{props.note.info.label}</p>
        <ul>{todos.forEach((todo) => { <li key={todo.id}>{todo.txt}</li> })}</ul>
    </div>
}
}
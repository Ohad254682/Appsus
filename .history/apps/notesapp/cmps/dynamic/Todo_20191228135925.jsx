export default function Todo(props) {

    let todos = props.note.info.todos;
    todos.forEach((todo)=>)
    return <div>
        <p>{props.note.type}</p>
        <p>{props.note.info.label}</p>
        <ul>{todos.forEach((todo) => {<li key={todo.id}>{todo.txt}</li>})}</ul>
    </div>
}
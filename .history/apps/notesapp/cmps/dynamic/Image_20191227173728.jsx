export default function Image(props) {
    return <div>
        <textarea className="textarea-note" disabled>{props.note.info.title}</textarea>
        <img src={props.note.info.url} />
    </div>
}
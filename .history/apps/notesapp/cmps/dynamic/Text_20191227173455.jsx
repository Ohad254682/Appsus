export default function Text(props) {
    let text = props.note.info.txt;
    return <div>
        <textarea className="textarea-note" disabled>{text}</textarea>
    </div>
}
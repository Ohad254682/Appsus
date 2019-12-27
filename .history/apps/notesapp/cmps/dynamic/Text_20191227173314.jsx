export default function Text(props) {
    let text = props.note.info.txt;
    return <div>
        <textarea disabled>{text}</textarea>
    </div>
}
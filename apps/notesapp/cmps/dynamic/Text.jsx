export default function Text(props) {
    let text = props.note.info.txt;
    return <div>
        <p>{text}</p>
    </div>
}
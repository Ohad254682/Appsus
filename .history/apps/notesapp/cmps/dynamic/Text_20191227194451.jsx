export default function Text(props) {
    let text = props.note.info.txt;
    return <div onClick={props.onEditMode}>
        <textarea className="textarea-note" disabled={props.isEditMode ? false : true}>{text}</textarea>
    </div>
}
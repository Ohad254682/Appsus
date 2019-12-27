export default function Text(props) {
    let text = props.note.info.txt;
    return <div>
        <textarea type="text" className="textarea-note" disabled={props.isEditMode ? false : true}>{text}</textarea>
    </div>
};
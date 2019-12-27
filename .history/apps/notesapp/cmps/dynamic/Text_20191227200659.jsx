export default function Text(props) {
    let text = props.note.info.txt;
    return <div>
        <input type="text" className="textarea-note" disabled={props.isEditMode ? false : true}>{text}</input>
    </div>
};
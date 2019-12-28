export default function Text(props) {
    let text = props.note.info.txt;
    return <div>
        <textarea type="text" className="textarea-note" defaultValue={text} disabled={props.isEditMode ? false : true}></textarea>
    </div>
};
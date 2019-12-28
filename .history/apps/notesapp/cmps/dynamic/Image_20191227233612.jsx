export default function Image(props) {


    return <div>
        <textarea className="textarea-note" value={props.note.info.title} disabled={props.isEditMode ? false : true}></textarea>
        <img src={props.note.info.url} />
    </div>
}



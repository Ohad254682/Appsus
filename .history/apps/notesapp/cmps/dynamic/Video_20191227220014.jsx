export default function Video(props) {
    return <div>
        <textarea className="textarea-note" defaultValue={props.note.info.label} disabled={props.isEditMode ? false : true}></textarea>
        <iframe width="300" height="200" src={props.note.info.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
}
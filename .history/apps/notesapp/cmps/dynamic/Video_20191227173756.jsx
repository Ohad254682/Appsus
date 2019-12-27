export default function Video(props) {
    return <div>
        <textarea className="textarea-note" disabled>{props.note.info.label}</textarea>
        <iframe width="300" height="200" src={props.note.info.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
}
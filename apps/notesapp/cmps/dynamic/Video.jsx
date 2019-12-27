export default function Video(props) {
    return <div>
                <p>{props.note.info.label}</p>
                <iframe width="300" height="200" src={props.note.info.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
}
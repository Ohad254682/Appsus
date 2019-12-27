export default function Image(props){
    return <div>
                <p>{props.note.info.title}</p>
                <img src={props.note.info.url} />
            </div>
}
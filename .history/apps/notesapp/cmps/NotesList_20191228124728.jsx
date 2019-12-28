import NotePreview from "./NotePreview.jsx";

export default function NotesList(props) {

    return <ul>
        {/* <NotePreview></NotePreview> */}
        {props.notes.map((note, i) => {
            return <NotePreview onLoadNotes={props.onLoadNotes} onDeleteNote={props.onDeleteNote} key={i} note={note} notes={props.notes}></NotePreview>
        })}
    </ul>
}
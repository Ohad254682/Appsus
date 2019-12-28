import NotePreview from "./NotePreview.jsx";
import SearchNote from "./SearchNote.jsx"

export default function NotesList(props) {

    return <ul>
        {/* <NotePreview></NotePreview> */}
        {props.notes.map((note, i) => {
            return <NotePreview onDeleteNote={props.onDeleteNote} key={i} note={note} notes={props.notes}></NotePreview>
        })}
    </ul>
}
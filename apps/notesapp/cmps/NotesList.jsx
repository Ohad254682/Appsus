import NotePreview from "./NotePreview.jsx";

export default function NotesList(props) {

    return <ul>
        {/* <NotePreview></NotePreview> */}
        {props.notes.map((note, i) => {
            return <NotePreview onDeleteNote={props.onDeleteNote} onLoadNotes={props.onLoadNotes} key={i} note={note} notes={props.notes} onSelectNote={props.onSelectNote} onCopyNote={props.onCopyNote} onTogglePinned={props.onTogglePinned}></NotePreview>

        })}
    </ul>
}
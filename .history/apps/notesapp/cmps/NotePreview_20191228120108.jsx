import DynamicCmps from "../cmps/dynamic/DynamicCmps.jsx";

export default class NotePreview extends React.Component {

    state = {
        isEditMode: false
    }

    componentDidMount() {
    }

    onIconOfNote = () => {
        let ICON = '';
        switch (this.props.note.type) {
            case 'noteText': ICON = 'A'; break;
            case "noteImg": ICON = '🖼'; break;
            case "noteTodos": ICON = '🖹'; break;
            case "noteVideo": ICON = '‣'; break;
        }
        return ICON;
    }


    onDeleteNote = (ev) => {
        this.props.onDeleteNote(this.props.note.id);
        ev.stopPropagation();
    }

    onSetEditMode = () => {
        this.setState({ isEditMode: !this.state.isEditMode });
    }


    render() {
        if (!this.props.note) return null;

        const type = this.props.note.type;
        const note = this.props.note;

        return (
            <article className="cards-container">
                <DynamicCmps onLoadNotes={this.props.onLoadNotes} onEditMode={this.onEditMode} type={type} note={note} isEditMode={this.state.isEditMode}></DynamicCmps>
                <div className="tools-bar">
                    <button onClick={this.onSetEditMode}>Edit</button>
                    <p className="note-icon">{this.onIconOfNote()}</p>
                    <button className="note-btn" onClick={this.onDeleteNote}>🗑️</button>
                </div>
            </article>
        )
    }
}
import DynamicCmps from "../cmps/dynamic/DynamicCmps.jsx";
import ColorPicker from "./dynamic/ColorPicker.jsx";

export default class NotePreview extends React.Component {

    state = {
        isEditMode: false,
        isPinned: false,
        currNote: this.props.note,
    }

    componentDidMount() {
        if (this.props.note.isPinned) {
            this.setState({ isPinned: true })
        }
    }

    onIconOfNote = () => {
        let Icon = '';
        switch (this.props.note.type) {
            case 'noteText': Icon = 'A'; break;
            case "noteImg": Icon = '🖼'; break;
            case "noteTodos": Icon = '🖹'; break;
            case "noteVideo": Icon = '‣'; break;
        }
        return Icon;
    }

    onDeleteNote = (ev) => {
        this.props.onDeleteNote(this.props.note.id);
        ev.stopPropagation();
    }

    onSetEditMode = () => {
        this.setState(prevState => ({ isEditMode: !prevState.isEditMode }))
    }

    onSelectNote = () => {
        this.setState({ currNote: this.props.note })
        this.props.onSelectNote(this.props.note);
    }

    onSetPinned = () => {
        this.setState(prevState => ({ isPinned: !prevState.isPinned }))
    }

    onChangeColor = () => {
        this.setState({ color: this.props.color })
        this.props.onChangeColor(this.props.color);
    }

    onCopyNote = () => {
        let { currNote } = this.state;
        this.props.onCopyNote({ ...this.state });
        console.log({ currNote });
    }


    render() {
        if (!this.props.note) return null;
        (this.state.isPinned ? (this.props.note.isPinned === true) : '')
        let type = this.props.note.type;
        let note = this.props.note;

        return (
            <article className="cards-container" id="container" style={{ backgroundColor: this.props.note.info.backgroundColor }} onClick={this.onSelectNote}>
                <DynamicCmps onLoadNotes={this.props.onLoadNotes} onEditMode={this.onEditMode} type={type} note={note} isEditMode={this.state.isEditMode} isPinned={this.onSetPinned}></DynamicCmps>

                <div className="tools-bar">
                    <p className="note-icon">{this.onIconOfNote()}</p>
                    <button className="note-btn" onClick={this.onSetEditMode}>📝</button>
                    <button className="note-btn" onClick={this.props.onOpenColorPicker}>🎨</button>
                    <button className="note-btn" onClick={this.onCopyNote}><img src="../../assets/images/icons/copy.png" /></button>
                    {this.state.colorMode && <ColorPicker onLoadNotes={this.props.onLoadNotes} note={note}></ColorPicker>}
                    <button className="note-btn" onClick={this.onSetPinned}>📌</button>

                    <button className="note-btn" onClick={this.onDeleteNote}>🗑️</button>
                </div>
            </article>
        )
    }
}
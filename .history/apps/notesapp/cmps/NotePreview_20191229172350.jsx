import DynamicCmps from "../cmps/dynamic/DynamicCmps.jsx";
import ColorPicker from "./dynamic/ColorPicker.jsx";

export default class NotePreview extends React.Component {

    state = {
        isEditMode: false,
        colorMode: false,
        // isPinned: this.props.note.isPinned,
        currNote: null,
    }

    componentDidMount() {
        // if (this.props.note.isPinned) {
        //     this.setState({ isPinned: true })
        // }
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

    onSelectNote = (note) => {
        this.setState({ currNote: note })
        this.props.onSelectNote(note);
    }

    onToggleColorMode = () => {
        this.setState(prevState => ({ colorMode: !prevState.colorMode }))
    }

    onCloseColorPicker = () => {
        this.setState({ colorMode: false })
    }

    onTogglePinned = () => {
        let { note } = this.props;
        // this.setState(prevState => ({ isPinned: !prevState.isPinned }))

        this.props.onTogglePinned(note)
        console.log(note);
        
    }

    onChangeColor = () => {
        this.setState({ color: this.props.color })
        this.props.onChangeColor(this.props.color);
    }

    onCopyNote = () => {
        let { note } = this.props;
        this.props.onCopyNote(note);
    }


    render() {
        if (!this.props.note) return null;
        let pinnedOrder = (this.props.note.isPinned ? -1 : 0)
        let pinnedBorder = (this.props.note.isPinned ? '2px solid green' : 'none')
        let pinnedBoxShadow = (this.props.note.isPinned ? 'box-shadow: 0px 0px 4px 0px green' : '')
        let pinnedIcon = (this.props.note.isPinned ? '#e3e3e3' : 'transparent')
        let visiblePinned = (this.props.note.isPinned ? 'visible' : 'hidden')
        let type = this.props.note.type;
        let note = this.props.note;

        return (
            <article className="cards-container" id="container" style={{ order: pinnedOrder, backgroundColor: this.props.note.info.backgroundColor, border: pinnedBorder, pinnedBoxShadow  }} onClick={this.onSelectNote}>
                <span className="pinned" style={{visibility: visiblePinned}}>📌</span>
                <DynamicCmps onLoadNotes={this.props.onLoadNotes} onEditMode={this.onEditMode} type={type} note={note} isEditMode={this.state.isEditMode} isPinned={this.onTogglePinned}></DynamicCmps>

                <div className="tools-bar">
                    <p title={this.props.note.type} className="note-icon">{this.onIconOfNote()}</p>
                    <button title="Edit note" className="note-btn" onClick={this.onSetEditMode}>📝</button>
                    <button title="Change color" className="note-btn" onClick={this.onToggleColorMode} note={note}>🎨</button>
                    <button title="Copy note" className="note-btn" onClick={this.onCopyNote}><img src="assets/images/icons/copy.png" /></button>
                    {this.state.colorMode && <ColorPicker onCloseColorPicker={this.onCloseColorPicker} onLoadNotes={this.props.onLoadNotes} note={note}></ColorPicker>}
                    <button title="Pin note" className="note-btn" onClick={this.onTogglePinned} style={{backgroundColor: pinnedIcon}}>📌</button>

                    <button title="Delete note" className="note-btn" onClick={this.onDeleteNote}>🗑️</button>
                </div>
            </article>
        )
    }
}
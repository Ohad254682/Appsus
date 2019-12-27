import noteService from "../services/noteService.js";
import DynamicCmps from "../cmps/dynamic/DynamicCmps.jsx";



export default class NotePreview extends React.Component {

    state = {
        note: null
    }

    componentDidMount() {
        this.setState({
            note: this.props.note
        }, () => {
            console.log(this.state.note);
        });
    }

    render() {
        if (!this.props.note) return null;

        const type = this.props.note.type;
        const note = this.props.note;
        
        return (          
            <article className="cards-container">
                <DynamicCmps type={type} note={note}></DynamicCmps>
            </article>
        )}
}
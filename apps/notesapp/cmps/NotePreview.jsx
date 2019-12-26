import NoteService from "../services/NoteService.js";
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

    // componentDidUpdate(prevState) {
    //     if (prevState.match.params.id !== this.props.match.params.id) {
    //         this.loadNote();
    //     }
    // }

    switchByType = () => {
      switch (this.state.note.type) {
          case "NoteText":
            return <p>{this.state.note.type}</p>
          case "NoteImg":
              return <p>{this.state.note.type}</p>
          case "NoteTodos":
              return <p>{this.state.note.type}</p>
          case "NoteVideo":
              return <p>{this.state.note.type}</p>
          default:
              return <p>{this.state.note.type}</p>
      }
    }

    render() {
        if (!this.state.note) return null;
        let type = this.switchByType();
        return <React.Fragment>
            <div>{type} </div>  
        </React.Fragment>
    }
}
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
       let {note} = this.state;
      switch (note.type) {
          case "NoteText":
            return <div>
                <p>{note.type}</p>
                <p>{note.info.txt}</p>
            </div>
          case "NoteImg":
              return <div>
                  <p>{note.type}</p>
                  <p>{note.info.title}</p>
                  <img src={note.info.url}/>
              </div>
          case "NoteTodos":
              let todos = note.info.todos;
              return <div>
                  <p>{note.type}</p>
                  <p>{note.info.label}</p>
                  <ul>{todos.forEach((todo)=><li>{todo}</li>)}</ul>
              </div>
        //   case "NoteVideo":
        //       return <div>
        //           <p>{this.state.note.type}</p>
        //           <p>{this.state.note.info.txt}</p>
        //       </div>
          default:
              return <p>{this.state.note.type}</p>
      }
    }

    render() {
        if (!this.state.note) return null;
        let type = this.switchByType();
        return <React.Fragment>
            
            <article className="cards-container">
                <div>{type}</div>  
            </article>
        </React.Fragment>
    }
}
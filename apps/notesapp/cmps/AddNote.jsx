import noteService from "../services/noteService.js"

export default class AddNote extends React.Component {

    state = {
        type: '',
        textInput: '',
        urlInput: '',
        placeholder: {
            noteTodos: 'Enter Your tasks',
            noteText: 'Enter Your note...',
            noteVideo: 'Enter Video Title',
            noteImg: 'Enter Image Title'
        }
    }

    componentWillUnmount() {
        this.setState({ type: '', textInput: '', urlInput: '' });
    }

    onAddNote = (ev) => {
        ev.preventDefault()
        let { type, textInput, urlInput } = this.state;
        // noteService.addNote({ type, textInput, urlInput }).then(() => this.setState({ type: '', textInput: '', urlInput: '' }))   
        this.props.onAddNote({ ...this.state });
        console.log({ type, textInput, urlInput });      
        // return {type, textInput, urlInput}      
    }

  
    onInputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }

    render() {
        
        return <React.Fragment>
            <section className="add-note-container">
                <form>
                    <input type="text" name="textInput" placeholder={this.state.placeholder[this.state.type]} onChange={this.onInputChange}/> 

                    {((this.state.type === 'noteImg') || (this.state.type === 'noteVideo')) && <input type="url" name="urlInput" placeholder="enter URL link" onChange={this.onInputChange} /> }   

                    <select name="type" onChange={this.onInputChange}> 
                        <option value="noteTodos">To Do</option>
                        <option value="noteText">Text</option>
                        <option value="noteImg">Image</option>
                        <option value="noteVideo">Video</option>
                    </select>
                    <button type="sumbit" className="send" onClick={this.onAddNote}>Add note</button>
                </form>
            </section>
          
        </React.Fragment>
         
    }
}
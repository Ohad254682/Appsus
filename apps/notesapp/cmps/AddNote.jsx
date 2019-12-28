import noteService from "../services/NoteService.js"

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
        },
        border: 'none'
    }

    componentWillUnmount() {
        this.setState({ type: '', textInput: '', urlInput: '' });
    }

    onAddNote = (ev) => {
        ev.preventDefault();
        let { type, textInput, urlInput } = this.state;
        this.props.onAddNote({ ...this.state });
        console.log({ type, textInput, urlInput });
    }


    onInputChange = (ev) => {
        let fieldName = ev.target.name
        let value = ev.target.value;
        if (this.state.type === 'noteVideo') {
            let videoUrl = value.replace('watch?v=', 'embed/');
            this.setState({ [fieldName]: videoUrl })
        } else {
            this.setState({ [fieldName]: value })
        }
    }

    // onFocus() {
    //     this.setState({
    //         border: '1px solid blue'
    //     })
    // }

    // onBlur() {
    //     this.setState({
    //         border: 'transprent'
    //     })
    // }

    render() {

        return <React.Fragment>
            <section className="add-note-container">
                <form>
                    <input type="text" name="textInput" value={this.state.textInput} placeholder={this.state.placeholder[this.state.type]} onChange={this.onInputChange} />

                    {((this.state.type === 'noteImg') || (this.state.type === 'noteVideo')) && <input type="url" name="urlInput" value={this.state.urlInput} placeholder="enter URL link" onChange={this.onInputChange} />}

                    <select name="type" value={this.state.type} onChange={this.onInputChange}>
                        <option name="noteTodos" value="noteTodos">🖹</option>
                        <option name="noteText" value="noteText">A</option>
                        <option name="noteImg" value="noteImg">🖼</option>
                        <option name="noteVideo" value="noteVideo">‣</option>
                    </select>
                    <button type="submit" className="send" onClick={this.onAddNote}>+</button>
                </form>
            </section>

        </React.Fragment>

    }
}

   
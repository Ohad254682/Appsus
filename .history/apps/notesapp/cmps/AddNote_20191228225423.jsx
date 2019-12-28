import noteService from "../services/NoteService.js"

export default class AddNote extends React.Component {

    state = {
        type: 'noteTodos',
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
                <form className="add-note-form">
                    <input type="text" name="textInput" value={this.state.textInput} placeholder={this.state.placeholder[this.state.type]} onChange={this.onInputChange} />

                    {((this.state.type === 'noteImg') || (this.state.type === 'noteVideo')) && <input type="url" name="urlInput" value={this.state.urlInput} placeholder="enter URL link" onChange={this.onInputChange} />}

                    <select name="type" value={this.state.type} onChange={this.onInputChange}>
<<<<<<< HEAD
                        <option value="noteTodos">🖹 To Do</option>
                        <option value="noteText">A Text</option>
                        <option value="noteImg">🖼 Image</option>
                        <option value="noteVideo">‣ Video</option>
                    </select>
                    <button  type="submit" onClick={this.onAddNote}>+</button>
=======
                        <option name="noteTodos" value="noteTodos">🖹</option>
                        <option name="noteText" value="noteText">A</option>
                        <option name="noteImg" value="noteImg">🖼</option>
                        <option name="noteVideo" value="noteVideo">‣</option>
                    </select>
                    <button type="submit" className="note-btn green" onClick={this.onAddNote}>+</button>
>>>>>>> 1ab7e2036a12e88d213ca9c7a69b19213162f396
                </form>
            </section>

        </React.Fragment>

    }
}

   
import EmailsService from "../services/EmailsService.js";

export default class EmailAdd extends React.Component {

    state = {
        subject: '',
        body: ''
    }

    componentDidMount() {
        this.setState({ subject: '', body: '' });
    }


    onAddEmail = (ev) => {
        ev.preventDefault()
        const { subject, body } = this.state
        EmailsService.addEmail({ subject, body })
            .then(this.props.stopComposing);
    }

    onInputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }


    render() {
        return <React.Fragment>
            <div className="form-container">
                <h2>New Message</h2>
                <div className="inputs">
                    <input type="text" placeholder="subject " value={this.state.subject} name="subject" onChange={this.onInputChange} />
                    <textarea type="text" placeholder="" name="body" rows="15" cols="50" onChange={this.onInputChange} value={this.state.body}></textarea>

                    <button type="submit" className="btn btn-send" onClick={this.onAddEmail}>Send</button>
                </div>
            </div>
        </React.Fragment>
    }
} 
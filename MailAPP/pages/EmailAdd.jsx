import EmailsService from "../services/EmailsService.js";

export default class EmailAdd extends React.Component {

    state = {
        email: {
            subject: '',
            body: '',
            isRead: false,
            sentAt: new Date()
        }
    }

    onAddEmail = (ev) => { 
        ev.preventDefault()
        EmailsService.addEmail(this.state.email).then(this.props.history.push('/'));
    }

    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ email: { [fieldName]: ev.target.value} })
    }

    render() {
        return (<React.Fragment>
        <div className="form-container">
            <h2>New Message</h2>
            <div className="inputs">
                <input type="text" placeholder="Subject:" name="subject" onChange={this.inputChange}></input>
                    <textarea type="text" placeholder="" name="body" rows="15" cols="50" onChange={this.textareaChange}></textarea>
                {/* <input type="date" placeholder="" name="date" onChange={this.inputChange}></input> */}
                <button className="btn btn-send" onClick={this.onAddEmail}>Send</button>
            </div>
            {/* <button onClick={this.onDelete}>Delete</button> */}
        </div>
            </React.Fragment>)
    }
} 
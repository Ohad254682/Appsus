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
        return (
        <div className="form-container">
            <h2>New Message</h2>
            <input type="text" placeholder="Subject:" name="subject" onChange={this.inputChange}></input>
            <button onClick={this.onAddEmail}>Send</button>
            {/* <button onClick={this.onDelete}>Delete</button> */}
        </div>)
    }
} 
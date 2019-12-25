import EmailsService from "../services/EmailsService.js";

export default class EmailAdd extends React.Component {

    state = {
        email: {
            subject: '',
            body: ''
        }
    }

    componentDidMount() {
        this.setState({email: { subject: '', body: '' }});
    }


    onAddEmail = (ev) => { 
        ev.preventDefault()
        EmailsService.addEmail(this.state.email).then(this.props.history.push('/'));
    }

    onInputChange = (ev) => {
        let fieldName = ev.target.name
        console.log('ev.target.name: ', ev.target.name);
        console.log('ev.target.value: ', ev.target.value);
        this.setState({ email: { subject: ev.target.value}})
        console.log(this.state);
        
    }

    onTextAreaChange = (ev) => {
        let fieldName = ev.target.name
        console.log('ev.target.name: ', ev.target.name);
        console.log('ev.target.value: ', ev.target.value);
        this.setState({ email: { body: ev.target.value } })
        console.log(this.state);
    }


    render() {
        return (<React.Fragment>
        <div className="form-container">
            <h2>New Message</h2>
            <div className="inputs">
            <input type="text" placeholder="Subject:" name="subject" onChange={this.onInputChange} value={this.state.subject}/>
            <textarea type="text" placeholder="" name="body" rows="15" cols="50" onChange={this.onTextAreaChange} value={this.state.body}></textarea>
                    
                <button type="submit" className="btn btn-send" onClick={this.onAddEmail}>Send</button>
            </div>
            {/* <button onClick={this.onDelete}>Delete</button> */}
        </div>
            </React.Fragment>)
    }
} 
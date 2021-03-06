import EmailsService from "../services/EmailsService.js";
export default class EmailDetails extends React.Component {

    render() {
        const { email } = this.props;
        if (!this.state.email) return <div className="loading">Loading...</div>
        return (
            <section>
                <button className="back-btn" onClick={this.props.removeSelectedEmail}>Back</button>
                <div className="email-details">
                    <h2>Subject: {email.subject}</h2>
                    <p>{email.body}</p>
                    <p>{new Date(email.sentAt).toLocaleDateString()}</p>
                </div>
            </section>
        )
    }
}
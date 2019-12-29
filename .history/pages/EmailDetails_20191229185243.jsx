

export default class EmailDetails extends React.Component {


    render() {
        const { email } = this.props;
        if (!email) return <div className="loading">Loading...</div>
        return (
            <section>
                <button className="back-btn" onClick={this.props.removeSelectedEmail}>Back</button>
                <div className="email-details">
                    <h2>{email.subject}</h2>
                    <p>{email.body}</p>
                    <p>{new Date(email.sentAt).toLocaleDateString()}</p>
                </div>
                <button className="reply-btn" onClick={this.props.onReply}>RE</button>
            </section>
        )
    }
}
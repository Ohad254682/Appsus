const { Link } = ReactRouterDOM

import EmailsService from "../../services/EmailsService.js";

export default class EmailPreview extends React.Component {

    state = {
        isUnread: ''
    }

    componentDidMount() {
        this.markUnread();
    }

    markUnread = () => {
        let unreadEmails = this.props.emails.filter(email => !email.isRead);
        unreadEmails.forEach(mail => {
            if (mail.id == this.props.email.id) {

                this.setState({ isUnread: 'black' })
            }
        })
    }

    onMarkAsRead = () => {
        EmailsService.markAsRead(this.props.email.id);
    }

    onDeleteMail = () => {
        this.props.onDeleteMail(this.props.email.id);
    }

    onSelectEmail = () => {
        this.props.onSelectEmail(this.props.email);
    }

    render() {
        return (
            <li className="email-preview">
                <h2 className={this.state.isUnread}>{this.props.email.subject}</h2>
                <p>{this.props.email.body}</p>
                <div className="preview-btns-container" onClick={this.onSelectEmail} onClick={this.onMarkAsRead}>
                    <button onClick={this.onDeleteMail}>🗑️</button>
                    <h4>{new Date(this.props.email.sentAt).toLocaleDateString()}</h4>
                </div>
            </li>
        )
    }
}

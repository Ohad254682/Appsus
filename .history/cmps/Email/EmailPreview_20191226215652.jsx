

import EmailsService from "../../services/EmailsService.js";
import EventBusServices from '../../services/EventBusServices.js'

export default class EmailPreview extends React.Component {

    state = {
        isUnread: ''
    }

    componentDidMount() {
        this.markReadUnread();
    }
    componentDidUpdate() {
        if (this.props.email.id !== this.props.email.isRead)
            this.markReadUnread();
    }

    markReadUnread = () => {
        this.props.email.isRead ? this.setState({ isUnread: 'gray' }) : this.setState({ isUnread: 'black' })

    }

    onMarkToUnread = (ev) => {
        EmailsService.markAsUnread(this.props.email.id);
        EventBusServices.emit('changeReadStatus');
        this.props.onLoadEmails();
        this.setState({ isUnread: 'black' });
        ev.stopPropagation();
    }

    onMarkAsRead = () => {
        EmailsService.markAsRead(this.props.email.id);
        EventBusServices.emit('changeReadStatus');
    }

    onDeleteMail = (ev) => {
        this.props.onDeleteMail(this.props.email.id);
        ev.stopPropagation();
    }

    onSelectEmail = () => {
        this.props.onSelectEmail(this.props.email);
        this.onMarkAsRead();
    }

    render() {
        return (
            <li className="email-preview" onClick={this.onSelectEmail}>
                <h2 className={this.props.email.isRead ? "gray" : "black"}>{this.props.email.subject}</h2>
                <p>{this.props.email.body}</p>
                <div className="preview-btns-container" >
                    <button onClick={this.onDeleteMail}>🗑️</button>
                    <button onClick={this.onMarkToUnread}>✉</button>
                    <h4>{new Date(this.props.email.sentAt).toLocaleDateString()}</h4>
                </div>
            </li>
        )
    }
}



import EmailsService from "../../services/EmailsService.js";
import EventBusServices from '../../services/EventBusServices.js'

export default class EmailPreview extends React.Component {


    ontoggleStarred = () => {
        EmailsService.To(this.props.email.id);
        EventBusServices.emit('changeReadStatus');
        this.props.onLoadEmails();
        ev.stopPropagation();
    }

    onMarkToUnread = (ev) => {
        EmailsService.markAsUnread(this.props.email.id);
        EventBusServices.emit('changeReadStatus');
        this.props.onLoadEmails();
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

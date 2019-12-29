import LongTxt from "../LongTxt.jsx";
import EmailsService from "../../services/EmailsService.js";
import EventBusServices from '../../services/EventBusServices.js'

export default class EmailPreview extends React.Component {
    
    state = {
        isLongTxtShown: false
    }

    ontoggleStarred = (ev) => {
        EmailsService.toggleStarred(this.props.email.id);
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
            <tr className="email-preview" onClick={this.onSelectEmail}>
                <td>
                    <button title="Star email" className="btn star-btn" onClick={this.ontoggleStarred}>{this.props.email.isStarred ? '⭐' : '✰'}</button>
                </td>
                <td>
                    <p className={this.props.email.isRead ? "gray email-subject" : "black email-subject"}>{this.props.email.subject}</p>
                </td>
                <td className="email-preview-body">
                    <LongTxt text={this.props.email.body} shortLength={100} isLongTxtShown={this.state.isLongTxtShown} />
                </td>
                {/* <p>{this.props.email.body}</p> */}
                <td>
                <div className="preview-btns-container" >
                    <div className="icons-preview-container">
                        <button title="Delete" onClick={this.onDeleteMail}>🗑️</button>
                        <button title="Mark unread" onClick={this.onMarkToUnread}><img src=""></img></button>
                    </div>
                    <h4>{new Date(this.props.email.sentAt).toLocaleDateString()}</h4>
                </div>
                </td>
            </tr>✉
        )
    }
}

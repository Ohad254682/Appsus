
import EmailStatus from 'Email/EmailStatus.jsx';
export default class SideNav extends React.Component {

    render() {
        return <nav>
            <ul>
                <li>
                    <button className="compose-btn" onClick={this.props.startComposing}>Compose +</button>
                    <button onClick={this.props.filterAll}>INBOX<EmailStatus></EmailStatus></button>
                    <button onClick={this.props.filterReadMails}>Read Mails</button>
                    <button onClick={this.props.filterUnreadMails} >Unread Mails<p></p></button>
                </li>
            </ul>
        </nav>
    }
}


({ this.props.emails.filter(email => !email.isRead).length })
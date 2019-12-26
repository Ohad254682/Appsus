

export default class SideNav extends React.Component {

    render() {
        return <nav>
            <ul>
                <li>
                    <button className="compose-btn" onClick={this.props.startComposing}>Compose +</button>
                    <button onClick={this.props.filterReadMails}>Read Mails</button>
                    <button onClick={this.props.filterUnreadMails} >Unread Mails</button><h3>{this.props.emails.filter(email => !email.isRead).length}</h3>
                </li>
            </ul>
        </nav>
    }
}
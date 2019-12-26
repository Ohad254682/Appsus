

export default class SideNav extends React.Component {

    render() {
        return <nav>
            <ul>
                <li>
                    <button className="compose-btn" onClick={this.props.startComposing}>Compose +</button>
                    <button onClick={this.props.filterAll}>ALL</button>
                    <button onClick={this.props.filterReadMails}>Read Mails</button>
                    <button onClick={this.props.filterUnreadMails} >Unread Mails<p>({this.props.emails.filter(email => !email.isRead).length})</p></button>
                </li>
            </ul>
        </nav>
    }
}
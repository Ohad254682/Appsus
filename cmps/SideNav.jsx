
import EmailStatus from 'Email/EmailStatus.jsx';
export default class SideNav extends React.Component {

    render() {
        return <nav className="side-nav-email">
            <ul>
                <div>
                    <li>
                        <button title="Compose Email" id="compose-btn" className="side-nav-btn compose-btn" onClick={this.props.startComposing}>+</button>
                    </li>
                </div>
                <div>
                    <li>
                        <button className="btn side-nav-btn" id="inbox-btn" onClick={this.props.filterAll}>Inbox <EmailStatus></EmailStatus></button>
                    </li>
                    <li>
                        <button className="btn side-nav-btn" id="star-btn" onClick={this.props.filterStarredMails} >Starred ⭐</button>
                    </li>
                    <li>
                        <button className="btn side-nav-btn" id="read-btn" onClick={this.props.filterReadMails}>Read Emails</button>
                    </li>
                    <li>
                        <button className="btn side-nav-btn" id="unread-btn" onClick={this.props.filterUnreadMails} >Unread Emails</button>
                    </li>      
                </div>
                
            </ul>
        </nav>
    }
}

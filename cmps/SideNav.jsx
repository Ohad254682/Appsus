
import EmailStatus from 'Email/EmailStatus.jsx';
export default class SideNav extends React.Component {

    render() {
        return <nav>
            <ul>
                <li>
                    <button className="compose-btn" onClick={this.props.startComposing}>Compose +</button>
                </li>
                <li>
                    <button className="btn side-nav-btn" onClick={this.props.filterAll}>Inbox <EmailStatus></EmailStatus></button>
                </li>
                <li>
                    <button className="btn side-nav-btn" onClick={this.props.filterReadMails}>Read Emails</button>
                </li>   
                <li>
                    <button className="btn side-nav-btn" onClick={this.props.filterUnreadMails} >Unread Emails</button>
                </li>     
                <li>
                    <button className="btn side-nav-btn" onClick={this.props.filterStarredMails} >Starred Emails</button>
                </li>        
                
            </ul>
        </nav>
    }
}

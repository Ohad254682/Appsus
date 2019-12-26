

export default class SideNav extends React.Component {

    render() {
        return <nav>
            <ul>
                <li>
                    <button className="compose-btn" onClick={this.props.startComposing}>Compose +</button>
                    <button>Read Mails</button>
                    <button>Unread Mails</button>
                </li>
            </ul>
        </nav>
    }
}
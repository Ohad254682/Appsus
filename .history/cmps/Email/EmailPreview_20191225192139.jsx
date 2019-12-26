const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {

    state = {
        isUnread: ''
    }

    componentDidMount() {
        this.MarkUnread();
    }

    MarkUnread = () => {
        this.props.unread.forEach(mail => {
            if (mail.id == this.props.email.id) {

                this.setState({ isUnread: 'black' })
            }
        })
    }

    MarkAsRead = () => {
        this.props.onMarkAsRead(this.props.email.id);
    }

    onDeleteMail = () => {
        console.log(this.props.unread);
        this.props.onDeleteMail(this.props.email.id);
    }

    render() {
        return (
            <li className="email-preview">
                <Link to={`/email/${this.props.email.id}`}></Link><button onClick={this.MarkAsRead}>Details</button></Link>
            <h2 className={this.state.isUnread}>{this.props.email.subject}</h2>
            <h4>{new Date(this.props.email.sentAt).toLocaleDateString()}</h4>
            <p>{this.props.email.body}</p>
            <button onClick={this.onDeleteMail}>DELETE</button>
            </li >
        )
    }
}

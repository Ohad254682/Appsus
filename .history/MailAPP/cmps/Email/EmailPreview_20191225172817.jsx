const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {

    state = {
        isUnread: ''
    }

    componentDidMount() {
        this.onMarkBlack();
    }

    onMarkBlack = () => {
        this.props.unread.forEach(mail => {
            console.log(mail.id);
            console.log(this.props.email.id);
            if (mail.id == this.props.email.id) {

                this.setState({ isUnread: 'black' })
            }
        })
    }

    onDeleteMail = () => {
        console.log(this.props.unread);
        this.props.onDeleteMail(this.props.email.id);
    }

    render() {
        return (
            <li className="email-preview">
                <button><Link to={`/email/${this.props.email.id}`}>Details</Link></button>
                <h2 className={this.state.isUnread}>{this.props.email.subject}</h2>
                <h4>{new Date(this.props.email.sentAt).toLocaleDateString()}</h4>
                <p>{this.props.email.body}</p>
                <button onClick={this.onDeleteMail}>DELETE</button>
            </li>
        )
    }
}

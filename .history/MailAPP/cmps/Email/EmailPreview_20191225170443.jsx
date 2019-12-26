const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {

    state = {
        isUndread='';
    }

    componentDidMount() {
        this.props.unread.forEach(mail =>)
    }

    onDeleteMail = () => {
        this.props.onDeleteMail(this.props.email.id);
    }

    render() {
        return (
            <li>
                <button><Link to={`/email/${this.props.email.id}`}>Details</Link></button>
                <h2>{this.props.email.subject}</h2>
                <h4>{new Date(this.props.email.sentAt).toLocaleDateString()}</h4>
                <p>{this.props.email.body}</p>
                <button onClick={this.onDeleteMail}>DELETE</button>
            </li>
        )
    }
}

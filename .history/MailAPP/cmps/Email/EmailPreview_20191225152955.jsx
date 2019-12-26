const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {


    onDeleteMail = () => {
        this.props.onDeleteMail(this.props.email.id);
    }

    render() {
        return (
            <li>
                <button><Link to={`/email/${this.props.email.id}`}>Details</Link></button>
                <h2>{this.props.email.subject}</h2>
                <h4>{`${this.props.email.sentAt.getDate()}/${this.props.email.sentAt.getMonth()}/${this.props.email.sentAt.getFullYear()}/
                ${this.props.email.sentAt.getHours}:${this.props.email.sentAt.getMinutes}`}</h4>
                <p>{this.props.email.body}</p>
                <button onClick={this.onDeleteMail}>DELETE</button>
            </li>
        )
    }
}

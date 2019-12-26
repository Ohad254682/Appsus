const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {


    onDeleteMail=()=> {
        this.props.onDeleteMail(this.props.email);
    }

    render() {
        return (
            <li>
                <button><Link to={`/email/${this.props.email.id}`}></Link></button>
                <h2>{this.props.email.subject}</h2>
                <h4>{this.props.email.sentAt}</h4>
                <p>{this.props.email.body}</p>
                <button onClick={this.onDeleteMail}>DELETE</button>
            </li>
        )
    }
}

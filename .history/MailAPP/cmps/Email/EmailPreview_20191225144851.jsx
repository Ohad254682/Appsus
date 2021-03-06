const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {


    onDeleteMail()

    render(){
        return (
            <li>
                <button><Link to={`/email/${this.props.email.id}`}></Link></button>
                <h2>{this.props.email.subject}</h2>
                <h4>{this.props.email.sentAt}</h4>
                <p>{this.props.email.body}</p>
                <button onClick={this.props.onDeleteMail}>DELETE</button>
            </li>
        )
    }
}

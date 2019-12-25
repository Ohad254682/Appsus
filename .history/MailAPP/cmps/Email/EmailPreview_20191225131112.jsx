const { Link } = ReactRouterDOM

export default function EmailPreview(props) {
    return (
        // <Link to={`/email/${props.email.id}`}>
            <li>
                <button><Link to={`/email/${this.props.email.id}`}>></Link></button>
                <h2>{props.email.subject}</h2>
                <h4>{props.email.sentAt}</h4>
                <p>{props.email.body}</p>
            </li>
    )
}

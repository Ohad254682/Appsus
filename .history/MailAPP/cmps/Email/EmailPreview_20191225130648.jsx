const { Link } = ReactRouterDOM

export default function EmailPreview(props) {
    return (
        // <Link to={`/email/${props.email.id}`}>
        <Link to={`/email/123`}>
            <li>
                <h2>{props.email.subject}</h2>
                <p>{props.email.body}</h3>
            </li>
        </Link>
    )
}


(email.subject, email.body, email.isRead, email.sentAt)
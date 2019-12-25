const { Link } = ReactRouterDOM

export default function EmailPreview(props) {
    return (
        // <Link to={`/email/${props.email.id}`}>
            <Link to={`/email/123`}>
            <li>
                <p>Email Preview here:</p>
                <h2>Subject of email</h2>
            </li>
        </Link>
        )
}
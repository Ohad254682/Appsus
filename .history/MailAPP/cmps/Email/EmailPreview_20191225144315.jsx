const { Link } = ReactRouterDOM

export default function EmailPreview extends React.Component {

    render(){
        return (
            <li>
                <button><Link to={`/email/${props.email.id}`}></Link></button>
                <h2>{props.email.subject}</h2>
                <h4>{props.email.sentAt}</h4>
                <p>{props.email.body}</p>
                <button>DELETE</button>
            </li>
        )
    }
}

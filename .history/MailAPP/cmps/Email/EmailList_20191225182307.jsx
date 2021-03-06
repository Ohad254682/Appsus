import EmailPreview from "./EmailPreview.jsx";

export default function EmailList(props) {


    return props.unread.length && <ul>
        <h3>{props.unread.length}</h3>
        {props.emails.map((email, i) => {
            return <EmailPreview onDeleteMail={props.onDeleteMail} loadUnread={props.loadUnread} key={i} email={email} unread={props.unread}></EmailPreview>
        })}
    </ul>
}
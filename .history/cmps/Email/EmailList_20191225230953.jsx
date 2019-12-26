import EmailPreview from "./EmailPreview.jsx";
import EmailSearch from "./EmailSearch.jsx"

export default function EmailList(props) {


    return emails.filter(email => !email.isRead).length && <ul>
        <h3>{props.emails.filter(email => !email.isRead).length}</h3>
        <EmailSearch setFilterBy={props.setFilterBy} emails={props.emails}></EmailSearch>
        {props.emails.map((email, i) => {
            return <EmailPreview onDeleteMail={props.onDeleteMail} key={i} email={email} unread={props.unread}></EmailPreview>
        })}
    </ul>
}
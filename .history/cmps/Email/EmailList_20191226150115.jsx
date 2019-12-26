import EmailPreview from "./EmailPreview.jsx";
import EmailSearch from "./EmailSearch.jsx"

export default function EmailList(props) {


    return <ul>
        <h3>{props.emails.filter(email => !email.isRead).length}</h3>
        <EmailSearch setFilterBy={props.setFilterBy} emails={props.emails}></EmailSearch>
        {props.emails.map((email, i) => {
            return <EmailPreview onSelectEmail={props.onSelectEmail} onDeleteMail={props.onDeleteMail} key={i} email={email} emails={props.emails}></EmailPreview>
        })}
    </ul>
}
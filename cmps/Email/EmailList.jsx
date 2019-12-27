import EmailPreview from "./EmailPreview.jsx";
import EmailSearch from "./EmailSearch.jsx"

export default function EmailList(props) {


    return <React.Fragment>
        <EmailSearch setFilterBy={props.setFilterBy} emails={props.emails}></EmailSearch>
        <table>
            <tbody>
        {props.emails.map((email, i) => {
            return <EmailPreview onLoadEmails={props.onLoadEmails} onSelectEmail={props.onSelectEmail} onDeleteMail={props.onDeleteMail} key={i} email={email} emails={props.emails}></EmailPreview>
        })}
            </tbody></table>
    </React.Fragment>
}
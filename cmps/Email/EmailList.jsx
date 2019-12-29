import EmailPreview from "./EmailPreview.jsx";
import EmailSearch from "./EmailSearch.jsx"

export default function EmailList(props) {

    return <React.Fragment>
        <EmailSearch setFilterBy={props.setFilterBy} emails={props.emails}></EmailSearch>
        <span className="sort-title">Sort By </span>
        <button className="side-nav-btn" onClick={props.onSortBySentAt}>Sent At</button> <button className="side-nav-btn" onClick={props.onSortBySubject}>Subject</button>
        <table>
            <tbody>
        {props.emails.map((email, i) => {
            return <EmailPreview onLoadEmails={props.onLoadEmails} onSelectEmail={props.onSelectEmail} onDeleteMail={props.onDeleteMail} key={i} email={email} emails={props.emails}></EmailPreview>
        })}
            </tbody></table>
    </React.Fragment>
}

import EmailPreview from "./EmailPreview.jsx";
import EmailSearch from "./EmailSearch.jsx"

export default function EmailList(props) {


    return <React.Fragment>
        <EmailSearch setFilterBy={props.setFilterBy} emails={props.emails}></EmailSearch>
        <table>
            {/* <thead>
                <th>Starred</th>
                <th>Subject</th>
                <th>Body</th>
                <th>Actions</th>
            </thead> */}
            <tbody>
        {props.emails.map((email, i) => {
            return <EmailPreview onLoadEmails={props.onLoadEmails} onSelectEmail={props.onSelectEmail} onDeleteMail={props.onDeleteMail} key={i} email={email} emails={props.emails}></EmailPreview>
        })}
            </tbody></table>
    </React.Fragment>
}
import EmailPreview from "./EmailPreview.jsx";
import EmailSearch from "./EmailSearch.jsx"

export default class EmailList extends React.Component {


    return <ul>
        <EmailSearch setFilterBy={props.setFilterBy} emails={props.emails}></EmailSearch>
        Sort By: <button onClick={props.onSortBySentAt}>Sent At</button> <button onClick={props.onSortBySubject}>Subject</button>
        {props.emails.map((email, i) => {
            return <EmailPreview onLoadEmails={props.onLoadEmails} onSelectEmail={props.onSelectEmail} onDeleteMail={props.onDeleteMail} key={i} email={email} emails={props.emails}></EmailPreview>
        })}
    </ul>
}
import EmailPreview from "./EmailPreview.jsx";
import EmailSearch from "./EmailSearch.jsx"

export default function EmailList(props) {

<<<<<<< HEAD
    return <ul>
        <EmailSearch setFilterBy={props.setFilterBy} emails={props.emails}></EmailSearch>
        
=======

    return <React.Fragment>
        <EmailSearch setFilterBy={props.setFilterBy} emails={props.emails}></EmailSearch>
        Sort By: <button onClick={props.onSortBySentAt}>Sent At</button> <button onClick={props.onSortBySubject}>Subject</button>
        <table>
            {/* <thead>
                <th>Starred</th>
                <th>Subject</th>
                <th>Body</th>
                <th>Actions</th>
            </thead> */}
            <tbody>
>>>>>>> f371322e3b788fe126c3414c0a33682c2ec1fe28
        {props.emails.map((email, i) => {
            return <EmailPreview onLoadEmails={props.onLoadEmails} onSelectEmail={props.onSelectEmail} onDeleteMail={props.onDeleteMail} key={i} email={email} emails={props.emails}></EmailPreview>
        })}
            </tbody></table>
    </React.Fragment>
}
import EmailPreview from "./EmailPreview.jsx";

export default function EmailList(props) {
    return <ul>
        {props.emails.map((email, i) => {
            return <EmailPreview onDeleteMail={props.onDeleteMail} key={i} email={email}></EmailPreview>
        })}
    </ul>
}
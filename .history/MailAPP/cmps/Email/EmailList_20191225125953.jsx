import EmailPreview from "./EmailPreview.jsx";

export default function EmailList(props) {
    return (
        <ul>
            {props.emails.map((email, i) => {
                return (
                    <EmailPreview key={i} email={props.emails[i]} />
                )
            })}
            <EmailPreview />
        </ul>)
}
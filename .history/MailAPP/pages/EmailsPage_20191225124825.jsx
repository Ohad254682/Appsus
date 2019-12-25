import EmailList from "../cmps/Email/EmailList.jsx";

export default class EmailsPage extends React.Component {

    render() {
        return (
            <section>
                <p>List Here:</p>
                <EmailList></EmailList>
            </section>
        )
    }
}
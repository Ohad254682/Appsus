import EmailList from "../cmps/Email/EmailList.jsx";

export default class EpmailsPage extends React.Component {

    render() {
        return (
            <section>
                <p>List Here:</p>
                <EmailList></EmailList>
            </section>
        )
    }
}
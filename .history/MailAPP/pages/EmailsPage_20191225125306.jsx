import EmailList from "../cmps/Email/EmailList.jsx";
import EmailsService from "../services/EmailsService.js"

export default class EmailsPage extends React.Component {

    state = {
        emails: null
    }

    componentDidMount() {
        getEmails
    }

    render() {
        return (
            <section>
                <p>List Here:</p>
                <EmailList></EmailList>
            </section>
        )
    }
}
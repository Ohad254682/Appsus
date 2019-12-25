import EmailList from "../cmps/Email/EmailList.jsx";
import EmailsService from "../services/EmailsService.js"

export default class EmailsPage extends React.Component {

    state = {
        emails: []
    }

    componentDidMount() {
        EmailsService.getEmails()
            .then(emails => this.setState({ emails }))
    }

    render() {
        return (
            <section className="email-list-container">
                <EmailList emails={this.state.emails}></EmailList>
            </section>
        )
    }
}
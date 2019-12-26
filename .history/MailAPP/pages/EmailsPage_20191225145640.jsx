import EmailList from "../cmps/Email/EmailList.jsx";
import EmailsService from "../services/EmailsService.js"

export default class EmailsPage extends React.Component {

    state = {
        emails: []
    }

    componentDidMount() {
        this.loadEmails();
    }

    onDeleteMail = (email) => {
        EmailsService.deleteEmail(email);
        this.loadEmails();

    }

    loadEmails = () => {
        EmailsService.getEmails()
            .then(emails => this.setState({ emails }))
    }

    render() {
        return (
            <section>
                <EmailList onDeleteMail={this.onDeleteMail} emails={this.state.emails}></EmailList>
            </section>
        )
    }
}
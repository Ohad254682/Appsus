import EmailList from "../cmps/Email/EmailList.jsx";
import EmailsService from "../services/EmailsService.js"

export default class EmailsPage extends React.Component {

    state = {
        emails: [],
        unreadEmails: []
    }

    componentDidMount() {
        this.loadEmails();
        this.loadUnreadEmails();
    }

    onDeleteMail = (emailId) => {
        console.log(this.state.unreadEmails)
        EmailsService.deleteEmail(emailId);
        this.loadEmails();
        this.loadUnreadEmails();

    }

    loadUnreadEmails = () => {
        EmailsService.getEmails()
            .then(emails => emails.filter(email => !email.isRead))
            .then(unreadEmails => this.setState({ unreadEmails }))
    }


    loadEmails = () => {
        EmailsService.getEmails()
            .then(emails => {
                console.log(emails);
                this.setState({ emails })})
    }

    render() {
        return (
            <section className="email-list-container">
                <EmailList history={this.props.history} loadEmails={this.loadEmails} loadUnreadEmails={this.loadUnreadEmails} onDeleteMail={this.onDeleteMail} emails={this.state.emails} unread={this.state.unreadEmails}  ></EmailList>
            </section>
        )
    }
}
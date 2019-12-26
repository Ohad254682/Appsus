import EmailList from "../cmps/Email/EmailList.jsx";
import EmailsService from "../services/EmailsService.js"

export default class EmailsPage extends React.Component {

    state = {
        emails: [],
        filterBy: ''
    }

    componentDidMount() {
        this.loadEmails(this.state.filterBy);
    }

    setFilterBy = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails(filterBy))
    }

    onDeleteMail = (emailId) => {
        EmailsService.deleteEmail(emailId);
        this.loadEmails();
        this.loadUnreadEmails();

    }

    loadEmails = (filterBy) => {
        EmailsService.getEmails(filterBy)
            .then(emails => {
                this.setState({ emails })
            })
    }

    render() {
        return (
            <section className="email-list-container">
                <EmailList setFilterBy={this.setFilterBy} onDeleteMail={this.onDeleteMail} emails={this.state.emails} unread={this.state.unreadEmails}  ></EmailList>
            </section>
        )
    }
}
import EmailList from "../cmps/Email/EmailList.jsx";
import EmailsService from "../services/EmailsService.js"

export default class EmailsPage extends React.Component {

    state = {
        emails: [],
        unreadEmails: [],
        filterBy:''
    }

    componentDidMount() {
        this.loadEmails(this.state.filterBy);
        this.loadUnreadEmails(this.state.filterBy);
    }

    setFilterBy=(filterBy)=>{
        this.setState({filterBy})
    }

    onDeleteMail = (emailId) => {
        EmailsService.deleteEmail(emailId);
        this.loadEmails();
        this.loadUnreadEmails();

    }

    loadUnreadEmails = (filterBy) => {
        EmailsService.getEmails(filterBy)
            .then(emails => emails.filter(email => !email.isRead))
            .then(unreadEmails => this.setState({ unreadEmails }))
    }


    loadEmails = (filterBy) => {
        EmailsService.getEmails(filterBy)
            .then(emails => {
                console.log(emails);
                this.setState({ emails })
            })
    }

    render() {
        return (
            <section className="email-list-container">
                <EmailList setFilterBy={this.setFilterBy} loadEmails={this.loadEmails} loadUnreadEmails={this.loadUnreadEmails} onDeleteMail={this.onDeleteMail} emails={this.state.emails} unread={this.state.unreadEmails}  ></EmailList>
            </section>
        )
    }
}
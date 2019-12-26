import EmailList from "../cmps/Email/EmailList.jsx";
import EmailsService from "../services/EmailsService.js"

export default class EmailsPage extends React.Component {

    state = {
        emails: [],
        filterBy: '',
        selectedEmail: ''
    }

    componentDidMount() {
        this.loadEmails(this.state.filterBy);
    }

    onSelectEmail = (email) => {
        this.setState({ selectedEmail: email })
    }

    removeSelected = ()=>{
        this.setState({selectedEmail:null})
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
                <EmailList setFilterBy={this.setFilterBy} onDeleteMail={this.onDeleteMail} emails={this.state.emails}  ></EmailList>
            </section>
        )
    }
}
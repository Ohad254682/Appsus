import EmailList from "../cmps/Email/EmailList.jsx";
import EmailsService from "../services/EmailsService.js";
import SideNav from "../cmps/SideNav.jsx";
import EmailAdd from "EmailAdd.jsx";
import EmailDetails from "EmailDetails.jsx";

export default class EmailsPage extends React.Component {

    state = {
        emails: [],
        filterBy: '',
        selectedEmail: '',
        isComposing: false
    }

    componentDidMount() {
        this.loadEmails(this.state.filterBy);
    }

    onSelectEmail = (email) => {
        this.setState({ selectedEmail: email })
    }

    removeSelectedEmail = () => {
        this.setState({ selectedEmail: '' })
    }

    setFilterBy = (filterBy) => {
        this.setState({ filterBy },
            this.loadEmails(filterBy)
        )
    }

    onDeleteMail = (emailId) => {
        EmailsService.deleteEmail(emailId);
        this.loadEmails();
    }

    loadEmails = (filterBy) => {
        EmailsService.getEmails(filterBy)
            .then(emails => {
                this.setState({ emails })
            })
    }

    startComposing = () => {
        this.setState({ isComposing: true })
    }

    stopComposing = () => {
        this.setState({ isComposing: false })
    }

    render() {
        console.log(this.state.emails)
        return (
            <div className="emails-page-container">
                <SideNav startComposing={this.startComposing}></SideNav>
                <section className="email-list-container">
                    {this.state.isComposing && <EmailAdd loadEmails={this.loadEmails} stopComposing={this.stopComposing}></EmailAdd>}
                    {(this.state.selectedEmail) ? <EmailDetails removeSelectedEmail={this.removeSelectedEmail} email={this.state.selectedEmail}></EmailDetails>
                        :
                        <EmailList onSelectEmail={this.onSelectEmail} setFilterBy={this.setFilterBy} onDeleteMail={this.onDeleteMail} emails={this.state.emails}  ></EmailList>}
                </section></div>
        )
    }
}


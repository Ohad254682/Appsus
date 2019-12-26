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
        filterMode: 'All',
        isComposing: false
    }

    componentDidMount() {
        this.loadEmails(this.state.filterBy, this.state.filterMode);
    }

    onSelectEmail = (email) => {
        this.setState({ selectedEmail: email })
    }

    removeSelectedEmail = () => {
        this.setState({ selectedEmail: '' })
    }

    setFilterBy = (filterBy) => {
        this.setState({ filterBy },
            this.loadEmails(filterBy, this.state.filterMode)
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

    onLoadEmails = () => {
        this.loadEmails();
    }

    filterReadMails = () => {
        this.setState({ filterMode: 'Read' })
    }

    filterUnreadMails = () => {
        this.setState({ filterMode: 'Unread' })
    }

    startComposing = () => {
        this.setState({ isComposing: true })
    }

    stopComposing = () => {
        this.setState({ isComposing: false }, this.loadEmails())
    }

    render() {
        console.log(this.state.emails)
        return (
            <div className="emails-page-container">
                <SideNav filterReadMails={this.filterReadMails} filterUnreadMails={this.filterUnreadMails} startComposing={this.startComposing} emails={this.state.emails}></SideNav>
                <section className="email-list-container">
                    {this.state.isComposing && <EmailAdd stopComposing={this.stopComposing}></EmailAdd>}
                    {(this.state.selectedEmail) ? <EmailDetails removeSelectedEmail={this.removeSelectedEmail} email={this.state.selectedEmail}></EmailDetails>
                        :
                        <EmailList onLoadEmails={this.onLoadEmails} onSelectEmail={this.onSelectEmail} setFilterBy={this.setFilterBy} onDeleteMail={this.onDeleteMail} emails={this.state.emails}  ></EmailList>}
                </section></div>
        )
    }
}


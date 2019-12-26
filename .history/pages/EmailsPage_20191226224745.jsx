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
        this.onLoadEmails();
    }

    onSelectEmail = (email) => {
        this.setState({ selectedEmail: email })
    }

    removeSelectedEmail = () => {
        this.setState({ selectedEmail: '' })
    }

    setFilterBy = (filterBy) => {
        this.setState({ filterBy },
            this.onLoadEmails()
        )
    }

    onDeleteMail = (emailId) => {
        EmailsService.deleteEmail(emailId);
        this.onLoadEmails();
    }

    loadEmails = (filterBy, filterMode) => {
        EmailsService.getEmails(filterBy, filterMode)
            .then(emails => {
                this.setState({ emails })
            })
    }

    onLoadEmails = () => {
        this.loadEmails(this.state.filterBy, this.state.filterMode);
    }

    filterReadMails = () => {
        this.setState({ filterMode: 'Read' }, this.loadEmails(this.state.filterBy, 'Read'))
    }

    filterUnreadMails = () => {
        this.setState({ filterMode: 'Unread' }, this.loadEmails(this.state.filterBy, 'Unread'))
    }

    filterAll = () => {
        this.setState({ filterMode: 'All' }, this.loadEmails(this.state.filterBy, 'All'))
    }

    filterStarredMails=()=>{
        this.setState({ filterMode: 'All' }, this.loadEmails(this.state.filterBy, 'All'))
    }

    startComposing = () => {
        this.setState({ isComposing: true })
    }

    stopComposing = () => {
        this.setState({ isComposing: false }, this.onLoadEmails());
    }

    

    render() {
        console.log(this.state.emails)
        return (
            <div className="emails-page-container">
                <SideNav filterStarredMails={this.filterStarredMails} filterAll={this.filterAll} filterReadMails={this.filterReadMails} filterUnreadMails={this.filterUnreadMails} startComposing={this.startComposing} emails={this.state.emails}></SideNav>
                <section className="email-list-container">
                    {this.state.isComposing && <EmailAdd stopComposing={this.stopComposing}></EmailAdd>}
                    {(this.state.selectedEmail) ? <EmailDetails removeSelectedEmail={this.removeSelectedEmail} email={this.state.selectedEmail}></EmailDetails>
                        :
                        <EmailList onLoadEmails={this.onLoadEmails} onSelectEmail={this.onSelectEmail} setFilterBy={this.setFilterBy} onDeleteMail={this.onDeleteMail} emails={this.state.emails}  ></EmailList>}
                </section></div>
        )
    }
}


import EmailList from "../cmps/Email/EmailList.jsx";
import EmailsService from "../services/EmailsService.js";
import SideNav from "../cmps/SideNav.jsx";

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

    removeSelectedEmail = () => {
        this.setState({ selectedEmail: '' })
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
        return (<React.Fragment>
            <SideNav></SideNav>
            <section className="email-list-container">
                <EmailAdd></EmailAdd>
                {this.state.selectedEmail ? <EmailDetails removeSelectedEmail={this.removeSelectedEmail} email={this.state.selectedEmail}></EmailDetails>
                    :
                    <EmailList onSelectEmail={this.onSelectEmail} setFilterBy={this.setFilterBy} onDeleteMail={this.onDeleteMail} emails={this.state.emails}  ></EmailList>}
            </section></React.Fragment>
        )
    }
}


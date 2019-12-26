
import EmailsService from '../../services/EmailsService.js'

export default class EmailStatus extends React.Component {
    state = {
        unreadEmails: null
    }

    componentDidMount() {
        this.countUnread();
    }

    countUnread = () => {
        EmailsService.getEmails('', 'All')
            .then(emails => {
                this.setState({ unreadEmails: emails.filter(email => !email.isRead).length })
            })
    }
}



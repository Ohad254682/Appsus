
import EmailsService from '../../services/EmailsService.js'
import EventBusServices from '../../services/EventBusServices.js'

export default class EmailStatus extends React.Component {
    state = {
        unreadEmails: null
    }

    componentDidMount() {
        this.countUnread();
        EventBusServices.on('changeReadStatus', () => this.countUnread())
    }

    countUnread = () => {
        EmailsService.getEmails('', 'All')
            .then(emails => {
                this.setState({ unreadEmails: emails.filter(email => !email.isRead).length })
            })
    }

    render() {
        return <p>({this.state.unreadEmails})</p>
    }
}



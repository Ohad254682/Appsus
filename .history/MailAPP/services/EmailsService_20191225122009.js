export default { getEmailById, getEmails, createEmails, addEmail, deleteEmail }
import StorageService from 'storageService.jsx';
import Email from 'Email.jsx'

const gEmails = StorageService.load('gEmails') || createEmails();


function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve({ ...email })
}

function getEmails(filterBy) {
    if (filterBy) return Promise.resolve(gEmails.filter(email => {
        return email.subject.includes(filterBy.subject) && email.body.includes(filterBy.body)
    }))
    return Promise.resolve([...gEmails])
}

function createEmails() {
    return new Email('hello world', 'one two three', false, Date.now());
}


function addEmail(subject, body, isRead, sentAt) {
    const newEmail = new Email(subject, body, isRead, sentAt)
    gEmails = [...gEmails, newEmail]
    storageService.store('gEmails', gEmails)

    return Promise.resolve(newEmail)
}

function deleteEmail(email) {
    gEmail = gEmail.filter((currEmail) => currEmail.id !== email.id)
    storageService.store('gEmails', gEmails);
    return Promise.resolve(true)
}

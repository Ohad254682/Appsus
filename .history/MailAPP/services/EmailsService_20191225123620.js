export default { getEmailById, getEmails, createEmails, addEmail, deleteEmail }
import StorageService from 'storageService.jsx';
import Email from 'Email.js'

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

function createEmails(emailsData) {
    return emailsData.reduce(function (acc, email) {
        return [...acc, email]
    }, [])
    return new Email('hello world', 'one two three', false, Date.now());
}


function addEmail(email) {
    const newEmail = new Email(email.subject, email.body, email.isRead, email.sentAt)
    gEmails = [...gEmails, newEmail]
    storageService.store('gEmails', gEmails)

    return Promise.resolve(newEmail)
}

function deleteEmail(email) {
    gEmail = gEmail.filter((currEmail) => currEmail.id !== email.id)
    storageService.store('gEmails', gEmails);
    return Promise.resolve(true)
}

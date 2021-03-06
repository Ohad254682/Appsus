import storageService from './storageService.js';
import Email from 'Email.js'
import { emailsData } from './Emails.js'

export default { getEmailById, getEmails, createEmails, addEmail, deleteEmail }
let gEmails = storageService.load('gEmails') || createEmails();



function getEmailById(emailId) {
    var email = gEmails.find(email => email.id === emailId)
    return Promise.resolve({ ...email })
}

function getEmails(filterBy) {
    if (filterBy) return Promise.resolve(gEmails.filter(email => {
        return email.subject.includes(filterBy.subject) && email.body.includes(filterBy.body)
    }))
    return Promise.resolve([...gEmails])
}

function createEmails() {
    return emailsData.reduce((acc, email) => {
        return [...acc, email]
    }, [])
}


function addEmail(email) {
    var newEmail = new Email(email.subject, email.body, email.isRead, email.sentAt)
    gEmails = [...gEmails, newEmail]
    StorageService.store('gEmails', gEmails)

    return Promise.resolve(newEmail)
}

function deleteEmail(emailId) {
    gEmails = gEmails.filter((currEmail) => currEmail.id !== emailId)
    StorageService.store('gEmails', gEmails);
    return Promise.resolve(true)
}

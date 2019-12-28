'use strict';
import storageService from './storageService.js';
import Email from 'Email.js'
import { emailsData } from './Emails.js'

export default {
    getEmailById,
    getEmails,
    createEmails,
    addEmail,
    deleteEmail,
    markAsRead,
    markAsUnread,
    toggleStarred
}

let gEmails = storageService.load('gEmails') || createEmails();



function getEmailById(emailId) {
    var email = gEmails.find(email => email.id === emailId)
    return Promise.resolve({ ...email })
}

function getEmails(filterBy, filterMode, sortingStatus) {
    return filterEmails(filterBy, filterMode)
        .then(emails => sorting(emails, sortingStatus));
}

function filterEmails(filterBy, filterMode) {
    if (filterMode === 'All') {
        return Promise.resolve(gEmails.filter(email => {
            return email.subject.toUpperCase().includes(filterBy.toUpperCase()) || email.body.toUpperCase().includes(filterBy.toUpperCase())
        }))
    }
    else if (filterMode === 'Unread') {
        return Promise.resolve(gEmails.filter(email => {
            return ((email.subject.toUpperCase().includes(filterBy.toUpperCase()) || email.body.toUpperCase().includes(filterBy.toUpperCase())) && !email.isRead)
        }))
    }
    else if (filterMode === 'Read') {
        return Promise.resolve(gEmails.filter(email => {
            return ((email.subject.toUpperCase().includes(filterBy.toUpperCase()) || email.body.toUpperCase().includes(filterBy.toUpperCase())) && email.isRead)
        }))
    }
    else if (filterMode === 'Starred') {
        return Promise.resolve(gEmails.filter(email => {
            return ((email.subject.toUpperCase().includes(filterBy.toUpperCase()) || email.body.toUpperCase().includes(filterBy.toUpperCase())) && email.isStarred)
        }))
    }
}

function sorting(emails, sortingStatus) {
    return emails.sort(function (email1, email2) {
        const firstEmail = (typeof email1[sortingStatus] === 'string') ? email1[sortingStatus].toUpperCase() : email1[sortingStatus];
        const secondEmail = (typeof email2[sortingStatus] === 'string') ? email2[sortingStatus].toUpperCase() : email2[sortingStatus];
        return firstEmail > secondEmail ? 1 : firstEmail < secondEmail ? -1 : 0;
    })
}

function createEmails() {
    return emailsData.reduce((acc, email) => {
        return [...acc, email]
    }, [])
}


function addEmail(email) {

    var newEmail = new Email(email.subject, email.body)
    gEmails = [...gEmails, newEmail]
    storageService.store('gEmails', gEmails)
    return Promise.resolve(newEmail)
}

function deleteEmail(emailId) {
    gEmails = gEmails.filter((currEmail) => currEmail.id !== emailId)
    storageService.store('gEmails', gEmails);
    return Promise.resolve(true)
}

function markAsRead(emailId) {
    gEmails.forEach(email => {
        if (email.id === emailId) {
            email.isRead = true;
        }
    })
    storageService.store('gEmails', gEmails);
}

function markAsUnread(emailId) {
    gEmails.forEach(email => {
        if (email.id === emailId) {
            email.isRead = false;
        }
    })
    storageService.store('gEmails', gEmails);
}


function toggleStarred(emailId) {
    gEmails.forEach(email => {
        if (email.id === emailId) {
            email.isStarred = !email.isStarred;
        }
    })
    storageService.store('gEmails', gEmails);
}





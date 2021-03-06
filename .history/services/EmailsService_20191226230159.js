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

function getEmails(filterBy, filterMode) {
    return filterEmails

}

function filterEmails(filterBy, filterMode) {
    if (filterMode === 'All') {
        return Promise.resolve(gEmails.filter(email => {
            return email.subject.includes(filterBy) || email.body.includes(filterBy)
        }))
    }
    else if (filterMode === 'Unread') {
        return Promise.resolve(gEmails.filter(email => {
            return ((email.subject.includes(filterBy) || email.body.includes(filterBy)) && !email.isRead)
        }))
    }
    else if (filterMode === 'Read') {
        return Promise.resolve(gEmails.filter(email => {
            return ((email.subject.includes(filterBy) || email.body.includes(filterBy)) && email.isRead)
        }))
    }
    else if (filterMode === 'Starred') {
        return Promise.resolve(gEmails.filter(email => {
            return ((email.subject.includes(filterBy) || email.body.includes(filterBy)) && email.isStarred)
        }))
    }
}
function createEmails() {
    return emailsData.reduce((acc, email) => {
        console.log([...acc, email]);

        return [...acc, email]
    }, [])
}


function addEmail(email) {
    console.log('servie');

    console.log(email);

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

function sorting(emails) {
    return emails.sort(function (email1, email2) {
        return email1[gSortStatus] - email2[gSortStatus] > 0 ? 1 : email1[gSortStatus] - email2[gSortStatus] < 0 ? -1 : 0;
    })
}


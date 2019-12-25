export default class Email {
    static nextId = 1;
    constructor(subject, body, isRead, sentAt) {
        this.subject = subject;
        this.body = body;
        this.isRead = isRead;
        this.sentAt = sentAt;
        this.id = Email.nextId++;
    }
}


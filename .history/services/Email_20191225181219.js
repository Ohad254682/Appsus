import { getRandomId } from "./utils.js";
export default class Email {

    constructor(subject, body, isRead, sentAt) {
        
        this.subject = subject;
        this.body = body;
        this.isRead = isRead;
        this.sentAt = sentAt;
        this.id = getRandomId();
    }
}


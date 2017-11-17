export default class MessageModel {

    constructor({ id = '', from = '', text = '',  attachments= '', sent = false } = {}) {
        this.id = id;
        this.from = from;
        this.text = text;
        this.attachments = attachments;
        this.sent = sent;
    }
}
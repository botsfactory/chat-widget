export default class MessageModel {

    constructor({ id = '', from = '', text = '', sent = false } = {}) {
        this.id = id;
        this.from = from;
        this.text = text;
        this.sent = sent;
    }
}
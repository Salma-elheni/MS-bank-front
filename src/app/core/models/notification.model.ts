export class Notification {

    type: string;
    content: string;

    constructor(type?: string, content?: string) {
        this.type = type;
        this.content = content;
    }
}

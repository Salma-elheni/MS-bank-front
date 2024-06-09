export class Request {
    approved: Boolean;
    type : string;
    content: string;
    constructor(approved?: Boolean, type?: string,content?: string) {
        this.approved = approved;
        this.type = type;
        this.content =content;
    }
}

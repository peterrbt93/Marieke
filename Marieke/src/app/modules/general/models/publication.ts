import { Author } from "./author";

export class Publication {
    title: string;
    pdfLink: string;
    body: string;
    authors: string;
    date: string;
    addInfo: string;
  
    constructor(title: string, pdfLink: string, body: string, authors: string, date: string, addInfo: string) {
      this.title = title;
      this.pdfLink = pdfLink;
      this.body = body;
      this.authors = authors;
      this.date = date;
      this.addInfo = addInfo;
    }
  }
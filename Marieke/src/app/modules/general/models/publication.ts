import { Author } from "./author";

export class Publication {
    title: string;
    pdfLink: string;
    body: string;
    authors: Author[];
  
    constructor(title: string, pdfLink: string, body: string, authors: Author[]) {
      this.title = title;
      this.pdfLink = pdfLink;
      this.body = body;
      this.authors = authors;
    }
  }
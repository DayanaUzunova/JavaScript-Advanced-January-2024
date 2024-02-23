class BookClub {
    library;
    books = [];
    member = [];

    constructor(library) {
        this.library = library;
    }

    addBook(title, author) {
        let currentBook = this.books.find((x) => x.title === title && x.author === author);
        if (currentBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        }
        else {
            this.books.push({ title, author });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }
    }

    addMember(memberName) {
        let currentMember = this.member.includes(memberName);

        if (currentMember) {
            return `Member ${memberName} is already a part of the book club.`;
        }
        else {
            this.member.push(memberName);
            return `Member ${memberName} has been joined to the book club.`;
        }
    }
    assignBookToMember(memberName, bookTitle) {

        if (!this.member.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`);
        }

        let currentBook = this.books.find((target) => target.title === bookTitle);

        if (!currentBook) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        this.books = this.books.filter((x) => x.title !== bookTitle);
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${currentBook.author}.`;
    }

    generateReadingReport (){
        if(this.member.length === 0){
            return "No members in the book club.";
        }
        if(this.books.length === 0){
            return `No available books in the library.`
        }
        let buff = `Available Books in ${this.library} library:\n`;

        this.books.forEach((x) => {
            buff += `"${x.title}" by ${x.author}\n`;
        });
        return buff.trim();
    }
}

// Exercise 1

const book = {
  title: "Some Javascript book",
  author: "Coding Guy",
  pages: 716,
  isRead: false,
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${
      this.pages
    }, Read: ${this.isRead ? "Yes" : "No"}`;
  },
};

// console.log(book);

console.log(book.summary());

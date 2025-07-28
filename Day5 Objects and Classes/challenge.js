const books = require("./books.json");

function priceOfBook(bookName) {
  let price = 0
  for (let i=0 ; i < books.length ; i++) {
    if(books[i].title == bookName ){
      price = books[i].price
    }
  }
  return price;
}
// console.log(priceOfBook('Pride and Prejudice'))

function affordableBooks(budget) {
    let livre = []
  for (let i=0 ; i < books.length ; i++) {
    if(books[i].price < budget ){
      livre.push(books[i].title)
    }
  }
  return livre;
}
// console.log(affordableBooks(10))

function findBookByGenre(genre) {
      let livre = []
  for (let i=0 ; i < books.length ; i++) {
    for (let j = 0; j < books[i].genres.length; j++) {
      if(books[i].genres[j] == genre){
        livre.push(books[j].title)
      }
      
    }
  }
  return livre;
}
// console.log(findBookByGenre('Fiction'))

function groupByGenre() {
  let bookByGenre = {}
    for (let i = 0; i < books.length; i++) {
      for (let j = 0; j < books[i].genres.length; j++) {
        const genre = books[i].genres[j]
        const book = books[i]
        if(bookByGenre[genre]){
          bookByGenre[genre].push(book.title)
        } else {
          bookByGenre[genre] = [book.title];  
        }
      }
    }
    return bookByGenre
}
// console.log(groupByGenre())

function sortBooksByPrice() {
  let res;
    for (let i = 0; i < books.length; i++) {
      for (let j = 0; j < books.length-1; j++) {
        if(books[j].price > books[j+1].price){
          res = books[j]
          books[j] = books[j + 1]
          books[j + 1] = res
        }
      }
    }
    return books
}
console.log(sortBooksByPrice())


(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();

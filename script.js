let library = new Array();
let currentBook = 0;
function Book(title, numpage, author, status)
{
  this.title = title;
  this.numpage = numpage;
  this.author = author;
  this.status = status;
}
Book.prototype.setStatus = function(status){
  book.status = status;
}
library.push(new Book("Godzilla", 234, "Ducky", "Reading"));
library.push(new Book("Art of war", 342, "Jhin", "Read"));
library.push(new Book("Gahhhhhh", 132, "Goku", "Completed"));
function displayLibrary()
{
  let bodyTable = document.querySelector("tbody");
  for (currentBook; currentBook < library.length; currentBook++)
  {
    let book = document.createElement("tr");
    bodyTable.appendChild(book);

    let title = document.createElement("td");
    title.textContent = library[currentBook].title;

    let author = document.createElement("td");
    author.textContent = library[currentBook].author;

    let numpage = document.createElement("td");
    numpage.textContent = library[currentBook].numpage;

    let status = document.createElement("td")
    let statusButton = status.appendChild(document.createElement("button"))
    statusButton.textContent = library[currentBook].status;
    statusButton.addEventListener("click", function(){

    });

    let remove = document.createElement("td");  
    let removeButton = remove.appendChild(document.createElement("button"))
    removeButton.textContent = "x";
    removeButton.addEventListener("click", function remove(){
      this.removeEventListener("click", remove);
      bodyTable.removeChild(book);
    });
    book.append(title, author, numpage, status, remove);
  }
}

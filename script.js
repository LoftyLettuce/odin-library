let library = new Array();
let currentBook = 0;
function Book(title, numpage, author, status)
{
  this.title = title;
  this.numpage = numpage;
  this.author = author;
  this.status = status;
}
Book.prototype.switchStatus = function(){
  let arrayStatus = ["Completed", "Reading", "Read"];
  let state = (arrayStatus.indexOf(this.status)+1)%3; //Change current state
  this.status = arrayStatus[state];
}
function displayLibrary()
{
  let bodyTable = document.querySelector("tbody");
  for (currentBook; currentBook < library.length; currentBook++)
  {
    let targetedBook = library[currentBook]; //so it can exist in every constant of the loop
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
      targetedBook.switchStatus();
      statusButton.textContent = targetedBook.status;
      console.table(library);
    });

    let remove = document.createElement("td");  
    let removeButton = remove.appendChild(document.createElement("button"))
    removeButton.textContent = "x";
    removeButton.addEventListener("click", function remove(){
      this.removeEventListener("click", remove);
      bodyTable.removeChild(book);
      library.splice(library.indexOf(targetedBook), 1);
      console.table(library);
    });
    book.append(title, author, numpage, status, remove);
  }
}
window.addEventListener("DOMContentLoaded", function(){
  let addButton = this.document.querySelector("tfoot button");
  let submitButton = this.document.querySelector("button");
  let title = this.document.getElementById("title");
  let author = this.document.getElementById("author");
  let numpage = this.document.getElementById("page-num");
  addButton.addEventListener("click", function(){
    document.querySelector("dialog").showModal();
  })
  submitButton.addEventListener("click", function(){
    let status = document.querySelector("input[name='status']:checked");
    library.push(new Book(title.value, numpage.value, author.value, status.value));
    displayLibrary();
  })
})
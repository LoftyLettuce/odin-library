let library = new Array();
let currentBook = 0;
class Book{
  constructor(title, numpage, author, status){
    this.title = title;
    this.numpage = numpage;
    this.author = author;
    this.status = status;
  }
  switchStatus(){
  let arrayStatus = ["Completed", "Reading", "Read"];
  let state = (arrayStatus.indexOf(this.status)+1)%3; //Change current state
  this.status = arrayStatus[state];
  }
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
    });

    let remove = document.createElement("td");  
    let removeButton = remove.appendChild(document.createElement("button"))
    removeButton.textContent = "x";
    removeButton.addEventListener("click", function remove(){
      this.removeEventListener("click", remove);
      bodyTable.removeChild(book);
      library.splice(library.indexOf(targetedBook), 1);
      currentBook--;
    });
    book.append(title, author, numpage, status, remove);
  }
}
//"Add new" button
window.addEventListener("DOMContentLoaded", function(){
  let addButton = this.document.querySelector("tfoot button");
  let bookDialog = this.document.querySelector("dialog");
  let cancelButton = bookDialog.querySelector("button[type='button']");
  let title = this.document.getElementById("title");
  let author = this.document.getElementById("author");
  let numpage = this.document.getElementById("page-num");
  addButton.addEventListener("click", function(){
    document.querySelector("dialog").showModal();
  })
  cancelButton.addEventListener("click", function(){
    bookDialog.returnValue = "cancel"
    document.querySelector("dialog").close();
  })
  bookDialog.addEventListener("close", function(){
      if (bookDialog.returnValue == "cancel"){return;}
      let status = document.querySelector("input[name='status']:checked");
      library.push(new Book(title.value, numpage.value, author.value, status.value));
      title.value = ""; author.value = ""; numpage.value = null; status.checked = false;
      displayLibrary();
  })
})
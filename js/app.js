const titleElm = document.getElementById("title");
const authorElm = document.getElementById("author");
const yearElm = document.getElementById("year");
const AddBookElm = document.getElementById("Add-Book");
const booklistElm = document.getElementById("book-list");
let allBooks = [];
AddBookElm.addEventListener("click", function (e) {
  e.preventDefault();
  if (titleElm.value === "" || authorElm.value === "" || yearElm.value === "") {
    alert("لطفا مقادیر خالی را پر کنید");
  } else {
    let newBook = {
      id: allBooks.length + 1,
      titleBook: titleElm.value,
      authorBook: authorElm.value,
      yearBook: yearElm.value,
    };
    allBooks.push(newBook);
    emptyInput();
    booklistElm.innerHTML=''
    createBookTodom(allBooks);
    saveTolocalStorage(allBooks);
  }
});
function emptyInput() {
  titleElm.value = "";
  authorElm.value = "";
  yearElm.value = "";
}
function createBookTodom(allBooks) {
  allBooks.forEach(function (book) {
    let trElm = document.createElement("tr");

    let thElmtitle = document.createElement("th");
    thElmtitle.textContent = book.titleBook;
    let thElmauthor = document.createElement("th");
    thElmauthor.textContent = book.authorBook;
    let thElmyear = document.createElement("th");
    thElmyear.textContent = book.yearBook;
    trElm.append(thElmtitle, thElmauthor, thElmyear);
    booklistElm.append(trElm);
  });
}
function saveTolocalStorage(allBooks) {
  localStorage.setItem("books", JSON.stringify(allBooks));
}

window.addEventListener('load',function(){
    if(localStorage.getItem('books'))
    {
        let bookss= JSON.parse(localStorage.getItem('books'));
        createBookTodom(bookss);
    }
})
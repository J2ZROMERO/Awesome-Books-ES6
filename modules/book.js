export default class Book {
  static completeData =[]; // variable to save on  local store

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  /* store data in array */
     storeTag = () => {
       const bookStore = `<div class = "book">
      <div class="dates">
      <h2 class="title"> ${this.title}</h2> 
      <p class="by">by</p>
      <h2 class ="author"> ${this.author}</h2> </div>
      <button class="remove" type="button">Remove</button>
      </div>`;

       Book.completeData.push(bookStore);
     }

    /* remove book from list html */
    static removeEvent = (parameter, item, nodata) => {
      if (item.childElementCount === 1 && parameter.target.classList.contains('remove')) {
        nodata.style.display = 'block';
      }
      if (parameter.target.classList.contains('remove')) {
        document.querySelector('.booklist').removeChild(parameter.target.parentElement);
      }
    }
}
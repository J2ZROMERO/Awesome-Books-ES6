import Book from './book.js';
import localS from './localStorage.js';

export default class interactionDOM {
  constructor() {
    this.aumento = 0;
  }

  // add book
  addbook = (btnAdd, titleV, authorV) => {
    btnAdd.addEventListener('click', (e) => {
      if (titleV.value === '' || authorV.value === '') {
        e.preventDefault();
      } else {
        e.preventDefault();
        const newBook = new Book(titleV.value, authorV.value);
        newBook.storeTag();
        localS.AddBookLS(titleV.value, authorV.value);
        titleV.value = '';
        authorV.value = '';
      }
    });
  }

  /* remove  book */
  removeBook = (item, nodata) => {
    item.addEventListener('click', (x) => {
      Book.removeEvent(x, item, nodata);
    });
  }

  /** /* show list link  */

  showListLink = (navListLink, contact, listBook, addBook, nodata, bookList) => {
    navListLink.addEventListener('click', () => {
      listBook.style.display = 'block';
      addBook.style.display = 'none';
      contact.style.display = 'none';

      this.aumento += 1;

      if (this.aumento === 1) {
        if (Book.completeData.length > 0) {
          nodata.style.display = 'none';
        } else {
          nodata.style.display = 'block';
        }

        Book.completeData.forEach((actual, position, datosB) => {
          bookList.innerHTML += datosB[position];
        });
      }
    });
  }

  /* show add book link  */
  showBookLink = (linkBookNav, bookList, addBook, listBook, contact) => {
    linkBookNav.addEventListener('click', () => {
      addBook.style.display = 'flex';
      listBook.style.display = 'none';
      contact.style.display = 'none';
      const datosP = [];
      for (let i = 0; i < bookList.childElementCount; i += 1) {
        datosP.push(bookList[i]);
      }
      Book.completeData = [];
      if (!Book.completeData.length <= 0) {
        Book.completeData.push(datosP);
      }
      this.aumento = 0;
    });
  }

  /* show contact link  */
  showContactLink = (navListContact, contact, listBook, addBook) => {
    navListContact.addEventListener('click', () => {
      contact.style.display = 'flex';
      listBook.style.display = 'none';
      addBook.style.display = 'none';
    });
  }
}

import localS from './modules/localStorage.js';
import interactionDOM from './modules/interactions.js';
import Book from './modules/book.js';
import { DateTime } from './luxon.js';

/* elements from HTML */

const addBook = document.querySelector('#btn-add');
const bookList = document.querySelector('#book-list');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const form = document.querySelector('#form');

const linkList = document.querySelector('.nav_list_link');
const linkContact = document.querySelector('.nav_list_contact');
const linkAddNew = document.querySelector('.nav_list_addnew');

const contact = document.getElementById('contact');
const listbook = document.getElementById('list-book');
const addbook = document.getElementById('add-book');
const nodata = document.querySelector('.nodata');

/* Link nav bar / add / remove / elements */
const elementD = new interactionDOM(title.value, author.value);
elementD.showListLink(linkList, contact, listbook, addbook, nodata, bookList);
elementD.showContactLink(linkContact, contact, listbook, addbook);
elementD.showBookLink(linkAddNew, bookList, addbook, listbook, contact);
elementD.addbook(addBook, title, author);
elementD.removeBook(bookList, nodata);

/*  local storage */
window.addEventListener('load', () => {
  localS.emptyLs();
});

/* luxon */
const date = document.querySelector('.date');
setInterval(() => {
  date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
}, 0);
setImmediate();
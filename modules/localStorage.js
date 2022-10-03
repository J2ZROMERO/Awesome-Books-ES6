export default class localS {
static contentData = [];

/* add book Local storage */

static AddBookLS = (title, author) => {
  this.data = {};
  this.data.title = title;
  this.data.author = author;

  this.contentData.push(this.data);
  localStorage.setItem('Books-list', JSON.stringify(this.contentData));
}

/* empty local storage */
static emptyLs = () => {
  localStorage.clear();
}
}

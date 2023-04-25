class ReadingListElement  extends HTMLElement {
  constructor() {
    super();
    this.innerHTML=`<hi>Hello Rob! I am the reading list custom element</hi>`
  }
}
customElements.define('reading-list-element', ReadingListElement);
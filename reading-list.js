class ReadingListElement  extends HTMLElement {
  constructor() {
    super();
    this.innerHTML=`<hi>Hello Rob! I am the reading list custom element</hi>`
  }
}
customElements.define('reading-list-element', ReadingListElement);



// class ReadingListElement  extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: 'open' });
//   }

//   connectedCallback() {
//     this.render();
//   }

//   render() {
//     this.shadowRoot.innerHTML = `
//       <style>
//         :host {
//           display: block;
//           border: 1px solid #ccc;
//           border-radius: 4px;
//           padding: 8px;
//           margin-bottom: 8px;
//         }
//       </style>
//       <slot></slot>
//     `;
//   }

// }
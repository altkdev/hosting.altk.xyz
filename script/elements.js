class brL extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<br>`;
        this.style = {
          border-bottom: 1px solid black;
        }
    }
}

window.customElements.define('br-l', brL);
//use <br-l></br-l>

class BrL extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        this.style.height = '1px';
        this.style.margin = '0';
        this.style.padding = '0';
        this.style.borderTop = '1px solid black';
        this.style.borderBottom = '1px solid black';
    }
}

window.customElements.define('br-l', BrL);
//use <br-l>

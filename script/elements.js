class BrL extends HTMLElement {
    connectedCallback() {
        const height = this.getAttribute('height') || '1px';
        const borderHeight = `calc(${height} * 3 / 5)`;
        this.style.display = 'block';
        this.style.height = height;
        this.style.margin = '0';
        this.style.padding = '0';
        this.style.borderTop = `${borderHeight} solid #dadcdc`;
        this.style.borderBottom = 'none';
    }
    static get observedAttributes() {
        return ['height'];
    }
    attributeChangedCallback() {
        // Reapply the styles when the height attribute changes
        this.connectedCallback();
    }
}

window.customElements.define('br-l', brL)

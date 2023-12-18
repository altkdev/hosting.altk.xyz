class brL extends HTMLElement {
    connectedCallback() {
        const height = this.getAttribute('height') || '1px';
        const borderHeight = `calc(${height} * 3 / 5)`;
        this.style.display = 'block';
        this.style.height = height;
        this.style.margin = '0';
        this.style.padding = '0';
        if (!this.hasAttribute("invis")) {
            this.style.border = `${borderHeight} solid #6f0be0`;
        }    
    }
    static get observedAttributes() {
        return ['height', 'invis'];
    }
    attributeChangedCallback() {
        // Reapply the styles when the height attribute changes
        this.connectedCallback();
    }
}

window.customElements.define('br-l', brL)

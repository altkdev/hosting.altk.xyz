class BrL extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const height = this.getAttribute('height') || '1px';
    const borderHeight = `calc(${height} * 3 / 5)`;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          height: ${height};
          margin: 0;
          padding: 0;
          background: linear-gradient(to bottom, transparent, #dadcdc, transparent);
          box-sizing: border-box;
        }
        
        :host:before,
        :host:after {
          content: '';
          display: block;
          height: ${borderHeight};
          background-color: #dadcdc;
          margin: auto;
        }

        :host:before {
          margin-bottom: ${borderHeight};
        }

        :host:after {
          margin-top: ${borderHeight};
        }
      </style>
    `;
  }

  // Override the HTMLElement behavior to make the element self-closing
  static get observedAttributes() {
    return ['height'];
  }

  attributeChangedCallback() {
    // Reapply the styles when the height attribute changes
    this.connectedCallback();
  }
}

window.customElements.define('br-l', BrL, { selfClosing: true });

//create a nav bar and title screen for the web page
const template = document.createElement("template");
template.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<link href="/style/style.css">
<nav class="navbar navbar-expand-lg navbar-light bg-light" style="padding: 10px;">
    <a class="navbar-brand" href="/index.html">
        <img src="/images/icon.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
        Victoria's brand
    </a>
        <button id="toggle-hamburger" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="/htmlPages/home.html">Home</a>
                <a class="nav-item nav-link" href="/htmlPages/pictures.html">Pictures</a>
                <a class="nav-item nav-link" href="#">Projects</a>
                <a class="nav-item nav-link" href="#">Reviews</a>
            </div>
        </div>
    </nav>
`;

class myNavigation extends HTMLElement{
    constructor(){
        super();

    //attach shadow DOM
    this.attachShadow({ mode: "open" });

    //clone template
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.nav = this.shadowRoot.querySelector("nav");
    this.navLink = this.shadowRoot.querySelector("nav-item nav-link");
    this.titleElement = this.shadowRoot.querySelector("#title-element");

    }//end constructor


    connectedCallback()
    {
        this.render();
    }

    attributeChangedCallback(attributeName, oldVal, newVal)
    {
        this.render();
    }

    static get observedAttributes()
    {
        return ["data-title"];
    }

    render()
    {
        const title = this.dataset.title ? this.dataset.title : "&copy; 2022 Victoria Olivieri";
        this.titleElement = `${title}`;
    }
}//ends SWHeader element

customElements.define('my-navigation', myNavigation);
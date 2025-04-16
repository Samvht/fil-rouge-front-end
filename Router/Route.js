export default class Route {
    constructor(url, title, pathHtml, pathJS = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
    }

}

/*
[] -> Tout le monde peut y accéder
 */
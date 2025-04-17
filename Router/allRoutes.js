import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/indexfront.html", "Accueil", "/pages/home.html"),
    new Route("/indexfront.html/galerie", "Galerie", "/pages/galerie.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
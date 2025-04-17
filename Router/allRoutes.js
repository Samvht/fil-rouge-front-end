import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/indexfront.html", "Accueil", "/pages/home.html"),
    new Route("/indexfront.html/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/indexfront.html/signin", "Connexion", "/pages/auth/signin.html"),
    new Route("/indexfront.html/signup", "Inscription", "/pages/auth/signup.html"),
    new Route("/indexfront.html/account", "Mon Compte", "/pages/auth/account.html"),
    new Route("/indexfront.html/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
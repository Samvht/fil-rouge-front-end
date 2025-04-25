import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/indexfront.html", "Accueil", "/pages/home.html"),
    new Route("/indexfront.html/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/indexfront.html/carte", "La carte", "/pages/carte.html"),
    new Route("/indexfront.html/signin", "Connexion", "/pages/auth/signin.html", "/js/auth/signin.js"),
    new Route("/indexfront.html/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js"),
    new Route("/indexfront.html/account", "Mon Compte", "/pages/auth/account.html"),
    new Route("/indexfront.html/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html"),
    new Route("/indexfront.html/mesResa", "Vos Réservations", "/pages/reservations/mesResa.html"),
    new Route("/indexfront.html/reserver", "Reserver", "/pages/reservations/reserver.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
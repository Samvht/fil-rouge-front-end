//Récupération mail + password
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
//Récupération bouton de connexion
const btnSingin = document.getElementById("btnSignin");

btnSingin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérification des données en BDD

    //Test avec données factives
    if(mailInput.value == "cerise@mail.com" && passwordInput.value == "cerise357"){
        alert("connexion réussie");
        //Il faudra récupérer le vrai token, const pour la valeur du token
        const token = "aabeo";
        //place ce token en cookie (Ici acesstoken)
        setToken(token);
        
        window.location.replace("/indexfront.html/mesResa");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}
function VerifFormulaire() {
    document.addEventListener("DOMContentLoaded", function () {
        var formulaire = document.getElementById("formulaire_coordonnées");

        formulaire.addEventListener("submit", function (e) {
            var nom = document.getElementById("nom");
            var prenom = document.getElementById("prénom");
            var codePostal = document.getElementById("CodePostal");
            var email = document.getElementById("email");
            var sujet = document.getElementById("sujet");
            var valider = document.getElementsByName("valider")[0];
            var ville = document.getElementById("Ville");

            var erreurs = false;

            var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (nom.value === "") {
                erreurs = true;
                document.getElementById("nom_erreur").textContent = "* Ce champ est obligatoire";
            } else if (!/^[a-zA-Z]+$/.test(nom.value)) {
                erreurs = true;
                document.getElementById("nom_erreur").textContent = "* Le champ nom ne doit contenir que des lettres";
            } else {
                document.getElementById("nom_erreure").textContent = "";
            }

            if (prenom.value === "") {

                erreurs = true;

            }else if (!/^[a-zA-Z]+$/.test(nom.value)) {
                erreurs = true;
                document.getElementById("prenom_erreur").textContent = "* Le champ prenom ne doit contenir que des lettres";
            }
            else {
                document.getElementById("prenom_erreur").textContent = "";
            }

            if (ville.value !== "" && !/^[a-zA-Z]+$/.test(ville.value)) {
                erreurs = true;
                document.getElementById("ville_erreur").textContent = "* Le champ ville ne doit contenir que des lettres";
            }

            var regexCodePostal = /^\d{5}$/;
            if (!regexCodePostal.test(codePostal.value)) {
                erreurs = true;
                document.getElementById("CP_erreur").textContent = "* Le champ CodePostal ne doit contenir que des chiffres";
            }

            if (!regexEmail.test(email.value)) {
                erreurs = true;
                document.getElementById("email_erreur").textContent = "* Le champ email doit contenir un @";
            }

            if (sujet.value === "Veuillez séléctionner un sujet") {
                erreurs = true;
                document.getElementById("sujet_erreur").textContent = "* Veuillez séléctionner un sujet autre que la valeur par défault";
            }

            if (!valider.checked) {
                erreurs = true;
                document.getElementById("valid_erreur").textContent = "* Veuillez cocher cette case";
            }

            if (erreurs) {
                e.preventDefault();
            }
        });
    });
}

VerifFormulaire();
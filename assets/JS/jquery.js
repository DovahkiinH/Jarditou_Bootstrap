$(document).ready(function () {
    $("#formulaire_coordonnées").on("submit", function (e) {
        var erreurs = false;

        var nom = $("#nom");
        var prenom = $("#prénom");
        var codePostal = $("#CodePostal");
        var email = $("#email");
        var sujet = $("#sujet");
        var valider = $("[name='valider']:eq(0)");
        var ville = $("#Ville");

        var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var regexCodePostal = /^\d{5}$/;

        if (nom.val() === "") {
            erreurs = true;
            $("#nom_erreur").removeClass("d-none");
        } else if (!/^[a-zA-Z]+$/.test(nom.val())) {
            erreurs = true;
            $("#nom_erreur").removeClass("d-none");
        } else {
            $("#nom_erreur").addClass("d-none");
        }

        if (prenom.val() === "") {
            erreurs = true;
        } else if (!/^[a-zA-Z]+$/.test(prenom.val())) {
            erreurs = true;
            $("#prenom_erreur").text("* Le champ prénom ne doit contenir que des lettres");
        } else {
            $("#prenom_erreur").text("");
        }

        if (ville.val() !== "" && !/^[a-zA-Z]+$/.test(ville.val())) {
            erreurs = true;
            $("#ville_erreur").text("* Le champ ville ne doit contenir que des lettres");
        }

        if (!regexCodePostal.test(codePostal.val())) {
            erreurs = true;
            $("#CP_erreur").text("* Le champ CodePostal ne doit contenir que des chiffres");
        }

        if (!regexEmail.test(email.val())) {
            erreurs = true;
            $("#email_erreur").text("* Le champ email doit contenir un @");
        }

        if (sujet.val() === "Veuillez sélectionner un sujet") {
            erreurs = true;
            $("#sujet_erreur").text("* Veuillez sélectionner un sujet autre que la valeur par défaut");
        }

        if (!valider.prop("checked")) {
            erreurs = true;
            $("#valid_erreur").text("* Veuillez cocher cette case");
        }

        if (erreurs) {
            e.preventDefault();
        }
    });
});
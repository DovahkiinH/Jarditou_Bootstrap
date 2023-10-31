function verif(){
    var envoi = true;
    var nom = $("#nom").val();

    if (nom === ""){

        envoi = false; 
        
    }else if (!/^[a-zA-Z]+$/.test(nom)) {

        envoi = false;

    }

    if (envoi){

        $("#nom_obligatoire").hide();
        document.forms[0].submit();

    }else
    {
        console.log("Envoi est faux, la div reste visible.");
        return false;

    }
}
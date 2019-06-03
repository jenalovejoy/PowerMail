$(document).ready(function(){

    $("#LogInButton").click(function(event){
        var email = $("#usernameinput").val();
        console.log(email);
        if (validateEmail(email)){
            window.location.href ="PowerMailInbox.html";
        } else {
            alert("Please enter a valid email");
        }
    });

    $("#RegisterButton").click(function(event){
        var email = $("#usernameinput").val();
        var password = $("#password").val();
        var passwordConfirm = $("#passwordConfirm").val();

        if (!validateEmail(email)){
            alert("Please enter a valid email");
        } else if (password != passwordConfirm) {
            alert("Password and confirmed password must be the same");
        } else {
            window.location.href ="PowerMailInbox.html";
        }
    });

    function validateEmail(email){
        var validEmailPatt = new RegExp("^\\w+(\\.?\\w)+@\\w+\\.(com|edu|net|org)$");
        console.log(validEmailPatt.test(email));
        return validEmailPatt.test(email);
    
    }
})

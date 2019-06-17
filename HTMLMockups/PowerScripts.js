$(document).ready(function(){

    $("#LogInButton").click(function(event){
        var email = $("#usernameinput").val();
        var password = $("#password").val();
        console.log(password);
        var flag = true;

        if (!validateEmail(email) ){
            flag = false;
            alert("Please enter a valid email");
        } 

        if (typeof(password) == "undefined" | password == ""){
            alert("Please enter a password");
            flag = false;
        }

        if (flag){
            window.location.href ="PowerMailInbox.html";
        }

    });

    $("#RegisterButton").click(function(event){
        var email = $("#usernameinput").val();
        var password = $("#password").val();
        var passwordConfirm = $("#passwordConfirm").val();

        if (!validateEmail(email)){
            alert("Please enter a valid email");
        } else if (password != passwordConfirm ) {
            alert("Password and confirmed password must be the same");
        } else if (typeof(password) == "undefined" | password == "") {
            alert("Please enter a password");
        } else {
            window.location.href ="PowerMailInbox.html";
        }
    });

    $("#SendButton").click(function(event){
        var email = $("#sender").val();
        var cc = $("#cc").val();
        var bcc = $("#bcc").val();

        var emails = [email, cc, bcc]
        var flag = true;

        for (let e of emails){
            if (e != "" & !validateEmail(e)){
                flag = false;
            }  
        }

        if (flag){
            window.location.href ="PowerMailInbox.html";    
        } else {
            alert("Please confirm that your email(s) are valid");
        }
         
    });

    function validateEmail(email){
        var validEmailPatt = new RegExp("^\\w+(\\.?\\w)+@\\w+\\.(com|edu|net|org)$");
        console.log(validEmailPatt.test(email));
        return validEmailPatt.test(email);
    
    }
})

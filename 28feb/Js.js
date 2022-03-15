// function myfunction(){
//     alert("Wlcome To Our Page");
// }

// $( document ).ready(function() {
//     console.log( "ready!" );

//     myfunction();
// });
// function onSubmit(){
//     console.log(validation());
//     var name= document.getElementById("fullName").value;
//     var email= document.getElementById("email").value;
//     if(validation()){
//         document.getElementById("my_form").submit();
//         alert("name:-"+ name + "\n Email:-"+ email )
//     }
// }

// function validation() {
//     var fullname = document.getElementById("fullName").value;
//     var email = document.getElementById("email").value;
//     var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//     if (fullname === '' || email === '') {
//     alert("Please fill all fields...!!!!!!");
//     return false;
//     } else if (!(email).match(emailReg)) {
//     alert("Invalid Email...!!!!!!");
//     return false;
//     } else {
//     return true;
//     }
//     }


function required() {
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state").value;
    var birthDay = document.getElementById("birthDay").value;

    let string = "";
    if (name == "" || email == "" || country == ""||password == ""|| address == "" || state == "" || birthDay == "") {
        if (name == "") {
            string += "Please Enter The Name \n"
        }
        if (email == "") {
            string += "please enter the Email \n";
        }
        if (country == "") {
            string += "please enter the country \n";
        }
        if (password == "") {
            string += "please enter the password \n";
        }
        if (confirmPassword == "") {
            string += "please enter the confirmpassword \n";
        }
        if (address == "") {
            string += "please enter the address \n";
        }
        if (state == "") {
            string += "please enter the state \n";
        }
        if (birthDay == "") {
            string += "please enter the birthDay \n";
        }
        alert(string);
        return false;
    } else {
        alert('Your Form Submit Sucessful.');
        return true;
    }
}
function required() {


    var allInputs = document.getElementsByClassName("required");
    for (var i = 0; i < allInputs.length; i++) {

        if (allInputs[i].value == "") {
            alert("Please enter the value " + allInputs[i].name);
            return false;
        }
        console.log(allInputs[i].name);

        console.log(allInputs[i].value);
    }
    email_validation();

}
function email_validation() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(my_Form.email.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}


function Validate()
{
    if (document.form1.first_name.value == '') 
    {
        alert('Please fill in your first name!');
        return false;
    }
	else if (document.form1.last_name.value == '') 
    {
        alert('Please fill in your last name!');
        return false;
    }
    else if (document.form1.email.value == '') 
    {
       alert('Please fill in your email address!');
       return false;
    }
	
	else if (document.form1.phone_number.value == '') 
    {
        alert('Please fill in your phone number!');
        return false;
    }
	else if (document.form1.user_type.value == '') 
    {
        alert('Please fill in your relevant user type!');
        return false;
    }
	
	else if (document.form1.username.value == '') 
    {
        alert('Please fill in your relevant username!');
        return false;
    }
    else if (document.form1.password.value == '') 
    {
       alert('Please fill in your desired password!');
      return false;
	}
	
	
     
    else if (document.form1.password_confirmation.value == '') 
    {
       alert('Please fill in your password again for confirmation!');
      return false;
    }
    else if (document.form1.password.value != 
    document.form1.password_confirmation.value) 
    {
        alert("The two passwords are not identical! "+
        "Please enter the same password again for confirmation");
        return false;
    }
    	
     else{
		 alert('You are successfully registered');
	 }
}

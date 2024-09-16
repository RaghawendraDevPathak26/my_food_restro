
function validation()
{
   
     var name = document.getElementById("exampleInput1").value;
  var phone = document.getElementById("exampleInput2").value;
  var email = document.getElementById("exampleInputEmail1").value;
     var nameRegex= /^[a-zA-Z ]{2,30}$/;  // Only allows alphabets and spaces, 2 to 30 characters
  var phoneRegex= /^[6789][0-9]{9}$/;  // Allows 10 digits only
  var emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Simple email validation
if (nameRegex.test(name)) {
   document.getElementById("error-name").innerHTML="";
    
  }
    else{
       document.getElementById("error-name").innerHTML="Use only alphabets";
        return false;
    }
    if(phoneRegex.test(phone)){
         document.getElementById("error-mob_no.").innerHTML="";
    }
     else{
      document.getElementById("error-mob_no.").innerHTML="Use 10 digits";
        return false;
    }if(emailRegex.test(email)){
         document.getElementById("error-mob_no.").innerHTML="";
    }
    
   else{
      document.getElementById("error-email").innerHTML="Use valid email Id";
        return false;
    } 
}

Login=()=>{
    var person_fname=document.getElementById("f_name").value;
    var person_lname=document.getElementById("l_name").value;
    var person_email =document.getElementById("email").value;
    var person_password=document.getElementById("password").value;
    const fname_Regex=/^[A-Za-z\s]+$/;
    const lname_Regex=/^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!person_fname ){
        alert("Enter your First name")
    }
    else if(!person_fname.match(fname_Regex)){
        alert("Enter Correct Details for Firstname")
    }
    else{
        if (!person_lname){
            alert("Enter your Last name")
        }
        else if(!person_lname.match(lname_Regex)){
            alert("Enter Correct Details for Lastname")
        }
        else{
            if(!person_email){
                alert("Enter your Email")
            }
            else if(!person_email.match(emailRegex)){
                alert("Enter Correct Details for Email")
            }
            else{
                if(!person_password){
                    alert("Enter Password")
                }
                else if(person_password.length<8){
                    alert(" Password is short")
                }
                else{
                    window.location.assign("login.html")
                }
            }
        }
    }


}
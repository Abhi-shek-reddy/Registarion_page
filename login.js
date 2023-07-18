Open=()=>{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!username){
        alert("Enter Username")
    }
    else if(!username.match(usernameRegex)){
        alert("Enter Valid Username")
    }
    else{
        if(!password){
            alert("Enter Password")
        }
        else if(password.length<8){
            alert("Enter Valid Password")
        }
        else{
           window.location.assign("app.html")
        }
    }
}

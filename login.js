function log(){
    let user=document.getElementById("username").value
    let pass=document.getElementById("password").value

    if(user == "hanrolld" && pass == "1234")
    {
        window.location="blog.html";
    }
    else{
        alert("datos incorrectos");
    }

}
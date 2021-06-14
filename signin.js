console.log("ho")
function signincheck() {
    document.signinform.submit();

   
    if(document.getElementById("username").value=="admin" && document.getElementById("password").value=="admin")
    {
       document.write("")
       location.replace("admin.html");
      
    }
 
}
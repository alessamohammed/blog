
console.log("ghihihihi")
function post() {


      document.myform.submit();
      
     
      if(localStorage.getItem("blogs") === null)
      {
        var storedblogs=[]
      }
      else {
        var storedblogs = JSON.parse(localStorage.getItem("blogs")); 
      }
        var blog=[]
          blog[0]=document.getElementById("Name").value;
          blog[1]=document.getElementById("Title").value;
          blog[2]=document.getElementById("Text").value;            
          storedblogs.push(blog)
          alert("Done")
          localStorage.setItem("blogs", JSON.stringify(storedblogs));

     
        
}

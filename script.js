let fun = () =>{
    const http = new XMLHttpRequest();
    http.onload = function(){
        if(this.status==200 && this.readyState==4)
        {
            document.getElementById("demo").innerHTML=this.responseText;

        }else{
            document.getElementById("demo").innerHTML="not found"

        }
    }
    http.open("GET","/text.txt");
    http.send();
}


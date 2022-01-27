$(document).ready(
    ()=>{
        $('input[type="button"]').click(
            ()=>{
           var username=$('input[type="text"]').val();
           var password=$('input[type="password"]').val();
           if(username=='' && password==''){
               alert("Username or Password cannot be empty");
           }
            else{
                $.ajax({
                    url:"http://localhost:3000/comments",
                    type:'GET',
                    data:{
                        "username":username,
                        "password":password,
                    },
                    success:(x)=>{
                        alert(username+"Login Successful!!!");
                        console.log(x);
                        window.location="http://127.0.0.1:5500/html/registration.html"
                    }
                })
            }
            }
        )
    }
)
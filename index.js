const popup1= document.getElementById("form1");
const popup2= document.getElementById("form2");
const msg= document.getElementById("background");
const btn1= document.getElementById("btn-signup");
const btn2= document.getElementById("btn-login");
const c1= document.getElementById("cancel-signup");
const c2= document.getElementById("cancel-login");
btn1.addEventListener("click",openpopup1)
btn2.addEventListener("click",openpopup2)
c1.addEventListener("click",closepopup1)
c2.addEventListener("click",closepopup2)
    function openpopup1()
    {
        msg.style.display="none";
        popup1.style.display="block";
        popup2.style.display="none";
    }
    function openpopup2()
    {
        msg.style.display="none";
        popup2.style.display="block"; 
        popup1.style.display="none";
    }
    function closepopup1()
    {
        msg.style.display="block";
        popup1.style.display="none";
         
    }
    function closepopup2()
    {
        msg.style.display="block";
        popup2.style.display="none";
    }
   
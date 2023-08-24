

function display(n)
{
      console.log(n); 
      const input=document.getElementById("inputtype");
      input.value+=n;
}


function Onsubmit()
{
    const input=document.getElementById("inputtype");
    const res=eval(input.value);
    input.value=res;
}


function Delete() 
{
    const input=document.getElementById("inputtype");
    input.value="";
}


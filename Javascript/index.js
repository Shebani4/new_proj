
var flag=0;
var head = document.getElementById("head");
function togglemenu()
{

if (flag==0) {
head.style.display= "none";
flag=1;
}
else {
    head.style.display= "block"; 
    flag=0;
}

}


var flag=0;
var head = document.getElementById("head3");
function togglemenu()
{

if (flag==0) {
head.style.display= "none";
flag=1;
}
else {
    head.style.display= "block"; 
    flag=0;
}

} 

/*
function togglemenu()
var head = document.getElementById("head3");
{

if (head.style.display= "block") 
{
head.style.display= "none";

}
else {
    head.style.display= "block"; 
    
}

}*/


var a= document.createElement('p');
a.innerHTML="Getresult";
document.getElementById("head2").appendChild(a);



function result(data) {
    var fact=1;
    var i;
    for(i=1;i<=data.value;i++)
    {
        fact=fact*i;
    }
document.getElementById("answer").innerHTML = fact;
};



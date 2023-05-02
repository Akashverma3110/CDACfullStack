function addition(){
    var n1= parseInt(document.getElementById("num1").value);
    var n2= parseInt(document.getElementById("num2").value);
    document.getElementById("add").value=(n1+n2);
    // document.getElementById("mydiv").innerHTML+="Addition : "+(n1+n2);
    document.getElementById("result").value=(n1+n2);
}
function subtraction(){
    var n1= parseInt(document.getElementById("num1").value);
    var n2= parseInt(document.getElementById("num2").value);
    document.getElementById("sub").value=(n1-n2);
    // document.getElementById("mydiv").innerHTML+="Addition : "+(n1+n2);
    document.getElementById("result").value=(n1-n2);
}
function multiply(){
    var n1= parseInt(document.getElementById("num1").value);
    var n2= parseInt(document.getElementById("num2").value);
    document.getElementById("mul").value=(n1*n2);
    // document.getElementById("mydiv").innerHTML+="Addition : "+(n1+n2);
    document.getElementById("result").value=(n1*n2);
}
function division(){
    var n1= parseInt(document.getElementById("num1").value);
    var n2= parseInt(document.getElementById("num2").value);
    document.getElementById("div").value=(n1/n2);
    // document.getElementById("mydiv").innerHTML+="Addition : "+(n1+n2);
    document.getElementById("result").value=(n1/n2);
}

var validatenum1=()=>{
    var n1=document.getElementById("num1").value;
    if(isNaN(n1)){
        document.getElementById("errnum1").value="Alphabet is not allowed";
        return false;

    }
    document.getElementById("errnum1").value="";
    return true;
}

var validatenum2=()=>{
    var n1=document.getElementById("num2").value;
    if(isNaN(n1)){
        document.getElementById("errnum2").value="Alphabet is not allowed";
        return false;

    }
    document.getElementById("errnum2").value="";
    return true;
}
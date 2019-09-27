var Validacija=(function(){

var konstruktor=function(divElementPoruke){

    var greska=divElementPoruke;
    greska.style.backgroundColor="orangered";
    greska.innerHTML="";
    var ime,naziv,god=true,rep,pass=true,urladresa,indx;
    
    function je_li_validna(inputElement){
        var string=String(inputElement.value);
        if(string.length!=9){god=false;ispisiPoruku();}
        var i;
        for(i=0; i<(string.length)/2; i++){
            if(i==0 || i==1){
                if(string[i]!=string[i+5]){god=false; ispisiPoruku();}
            }
            else if(i==4){
                if(string[i]!='/'){god=false;ispisiPoruku();}
            }
            else if(i==2){
                if(string[i]==string[i+5]){
                    if(++(string[i+1])!=string[i+6]){god=false; ispisiPoruku();}
                } else if(++(string[i])==string[i+5]){
                    if(string[i+1]!=9 || string[i+6]!=0){god=false; ispisiPoruku();}
                }
            }
            else continue;
        }
        
    }
    function ispisiPoruku(){
        greska.innerHTML="Sljedeca polja nisu validna: ";
        if(ime==false)greska.innerHTML+="ime ";
        if(god==false)greska.innerHTML+="godina "
        if(rep==false)greska.innerHTML+="repozitorij ";
        if(indx==false)greska.innerHTML+="index ";
        if(naziv==false)greska.innerHTML+="naziv ";
        if(pass==false)greska.innerHTML+="password ";
        if(urladresa==false)greska.innerHTML+="url adresa";
        greska.innerHTML+="!";
    }
    
return{
    
ime:function(inputElement){ 
    var regex=/^([A-Z][a-zA-Z]{1,}[\ \-]?){1,4}$/;
    if(regex.test(inputElement.value)){
        ime=true;
    }
    else {
        ime=false;
        inputElement.style.backgroundColor="orangered";
        ispisiPoruku();
    }
},

godina:function(inputElement){
    
    je_li_validna(inputElement);

},
repozitorij:function(inputElement,regex){
    if(regex.test(inputElement.value)){rep=true;} 
    else {rep=false;
        ispisiPoruku();
    }
},
index:function(inputElement){
    var regex=/^(1[4-9]|20)\d{3}$/;
    if(regex.test(inputElement.value)){indx=true;}
    else {
        indx=false;
        ispisiPoruku();
    }
},
naziv:function(inputElement){
    var regex=/^([a-zA-Z]{2,}([a-zA-Z0-9\,\"\'\\\/\;\:\?\!\-]*)?([a-z]|\d))$/;
    if(regex.test(inputElement.value)){naziv=true;}
    else {
        naziv=false;
        ispisiPoruku();
    }
},
password:function(inputElement){
    var string=String(inputElement.value);
    var i;
    var brojac=0;
    if(string.length<7){pass=false; ispisiPoruku();
    }
    for(i=0;i<string.length;i++){
        if((string[i]>='a' && string[i]<='z') || (string[i]>='A' && string[i]<='Z') || (string[i]>='0' && string[i]<='9'))brojac++;
        if((string[i]<='a' || string[i]>='z') && (string[i]<='A' || string[i]>='Z') && (string[i]<='0' || string[i]>='9')){pass=false; ispisiPoruku();
        }

    }
    if(brojac<2){pass=false;ispisiPoruku();
    }
   
    
},
url:function(inputElement){
    var regex=/^((http|https|ftp|ssh)\:\/\/+[a-z]+(.[a-z]+)*\/?([a-z]+(\/[a-z]+)*)?\??([a-z][a-z0-9\-]*[a-z]+(\=[a-z][a-z0-9\-]*[a-z])+(\&[a-z][a-z0-9\-]*[a-z]))?)$/;
    if(regex.test(inputElement.value)){urladresa=true;}
    else {
        urladresa=false;
        ispisiPoruku();
    }
}
}
}
return konstruktor;
}());

function funkcija() {
var mojDiv=document.getElementById("test");
var inputGodina=document.getElementById("imeiprezime");
//var inputNazz=document.getElementById("imeiprezime");
var inputIndex=document.getElementById("index");
var validacija = new Validacija(mojDiv);
//validacija.godina(inputGodina);
validacija.ime(inputGodina);
validacija.index(inputIndex);


}
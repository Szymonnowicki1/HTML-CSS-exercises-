function performAction(){
    var e = document.getElementById("akcja");
    var value = e.value;

    if(value=="dodawanie"){
        dodawanie();
    }
    if(value=="odejmowanie"){
        odejmowanie();
    }
    if(value=="mnozenie"){
        mnozenie();
    }

    if(value=="dzielenie"){
        dzielenie();
    }
}

function dodawanie(){
    var a = parseInt(document.getElementById("liczba1").value);
    var b = parseInt(document.getElementById("liczba2").value);

    var wynik=a+b;
    document.getElementById("wynik").innerHTML=wynik;
}

function odejmowanie(){
    var a = parseInt(document.getElementById("liczba1").value);
    var b = parseInt(document.getElementById("liczba2").value);

    var wynik=a-b;
    document.getElementById("wynik").innerHTML=wynik;
}

function mnozenie(){
    var a = parseInt(document.getElementById("liczba1").value);
    var b = parseInt(document.getElementById("liczba2").value);

    var wynik=a*b;
    document.getElementById("wynik").innerHTML=wynik;
}

function dzielenie(){
    var a = parseInt(document.getElementById("liczba1").value);
    var b = parseInt(document.getElementById("liczba2").value);

    if(b==0){
        var wynik = "Blad";
    }else{
        var wynik = a/b;
    }
    document.getElementById("wynik").innerHTML=wynik;
}

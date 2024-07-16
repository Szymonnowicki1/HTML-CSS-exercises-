class auto{
    constructor(rok,przebieg,cena_wyjsciowa, cena_koncowa){
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    }
}

const a = new auto(2001,100000,160000,15000);
const b = new auto(2011,305800,165500,178000);
const c = new auto(2012,10000,87600,5600);

const tab = [];
tab[0] = a;
tab[1] = b;
tab[2] = c;

function display(){
    var divs = document.getElementsByClassName("variable");
    let count = 4;

    divs[0].textContent = "Rok";
    divs[1].textContent = "Przebieg";
    divs[2].textContent = "Cena wyjściowa";
    divs[3].textContent = "Cena końcowa";

    for(let i=0; i<tab.length; i++){
        divs[count].textContent = tab[i].rok;
        count++;
        divs[count].textContent = tab[i].przebieg;
        count++;
        divs[count].textContent = tab[i].cena_wyjsciowa;
        count++;
        divs[count].textContent = tab[i].cena_koncowa;
        count++;
    }
}

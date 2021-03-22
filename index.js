var bowlcount = 0;
var bpc = 1;
var chefPrice = 20;
var autoclicker = 0;
var chefs = 0;
var autoprice = 12;
var auto_cps = 0;
var resturantcps = 0;
var resturants = 0;
var resturantcost = 60;

function buyResturant(){
    if (bowlcount >= resturantcost) {
        bowlcount = Math.round(bowlcount - resturantcost);
        resturants = resturants +1;
        resturantcps = Math.round(5.5 * resturants);
        resturantcost = Math.round(resturantcost * 1.5) ;
        update();
}
    else {
        alert("You dont have enough cookies");
    }
}

function update(){
    document.getElementById('text').innerHTML = bowlcount + " Bowls";
    document.title = bowlcount + " Bowls";
    document.getElementById('amountAutoClick').innerHTML = "Auto clickers: " + autoclicker;
    document.getElementById('costAutoCliker').innerHTML = "Auto Clickers cost:  " + autoprice;
    document.getElementById('auto_cps').innerHTML = "Bowls per second: " + auto_cps;
    document.getElementById('chefPrice').innerHTML = "Chefs cost: " + chefPrice;
    document.getElementById('chefAmount').innerHTML = "chefs: " + chefs;
    document.getElementById('cookiePerClick').innerHTML = "Bowls per click: " + bpc;
    document.getElementById('resturantamount').innerHTML= "Resturants: " + resturants;
    document.getElementById('resturantcps').innerHTML = "Bowls per second: " + resturantcps;
    document.getElementById('resturantcost').innerHTML = "resturants cost: " + resturantcost;
    document.getElementById('bps').innerHTML = (auto_cps + resturantcps) + " bowls per second"; 
}

function timer() {
    bowlcount += auto_cps;
    bowlcount += resturantcps;
    update();
}

setInterval(timer, 1000);

function buyAutoClicker() {
    if (bowlcount >= autoprice) {
        bowlcount = bowlcount - autoprice;
        autoclicker += 1;
        auto_cps = Math.round(1.1 * autoclicker);
        autoprice = Math.round(autoprice * 1.5);
        update();
    }else {
        alert("You dont have enough cookies");
    }
}

function save() {
    localStorage.setItem("bowls", bowlcount);
    localStorage.setItem("resturants", resturants);
    localStorage.setItem("Clickers", autoclicker);
    update();
}

function load() {
    bowlcount = localStorage.getItem("bowls");
    bowlcount = parseInt(bowlcount);
    bowlcount = localStorage.getItem("Clickers");
    bowlcount = parseInt(autoclicker);
    bowlcount = localStorage.getItem("resturants");
    bowlcount = parseInt(resturants);

    update();
}

function makeBowl() {
    bowlcount += bpc;
    update();
}

function hireChef() {
    if(bowlcount >= chefPrice) {
        bpc = Math.round(bpc + 1.1);
        chefs += 1;
        bowlcount = Math.round(bowlcount - chefPrice);
        chefPrice = Math.round(chefPrice * 1.7) ;
        update();
    } else {
        alert("You dont have enough cookies");
    }

    
}
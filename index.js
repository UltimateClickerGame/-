var cookiecount = 0;
var cpc = 1;
var cps = 0;
var bakerprice = 20;
var autoclicker = 0;
var bakers = 0;
var autoprice = 12;
var auto_cps = 0;
var farm_cps = 0;
var farms = 0;
var farm_cost = 60;




function buyFarm(){
    if (cookiecount >= farm_cost) {
        cookiecount = Math.round(cookiecount - farm_cost);
        farms = farms +1;
        farm_cps = Math.round(5.5 * farms);
        farm_cost = Math.round(farm_cost * 1.5) ;
        update()  
}
    else {
        alert("You dont have enough cookies")
    }
}

function update(){
    document.getElementById('text').innerHTML = cookiecount + " Cookies";
    document.title = cookiecount + " Cookies";
    document.getElementById('amountAutoClick').innerHTML = "Auto clickers: " + autoclicker;
    document.getElementById('costAutoCliker').innerHTML = "Auto Clickers cost:  " + autoprice;
    document.getElementById('auto_cps').innerHTML = "Cookies per second: " + auto_cps;
    document.getElementById('bakerPriceText').innerHTML = "Baker cost: " + bakerprice;
    document.getElementById('bakerAmount').innerHTML = "Bakers: " + bakers;
    document.getElementById('cookiePerClick').innerHTML = "Cookies per click: " + cpc;
    document.getElementById('amount_farms').innerHTML = "Farms: " + farms;
    document.getElementById('farm_cps').innerHTML = "Cookie per second: " + farm_cps;
    document.getElementById('Farm_cost').innerHTML = "Farms cost: " + farm_cost;
    document.getElementById('cps').innerHTML = (farm_cps+auto_cps) + " cookies per second";
}

function timer() {
    cookiecount += auto_cps;
    cookiecount += farm_cps;
    update()
}

setInterval(timer, 1000)

function buyAutoClicker() {
    if (cookiecount >= autoprice) {
        cookiecount = Math.round(cookiecount - autoprice);
        autoclicker = autoclicker +1;
        auto_cps = Math.round(1.1 * autoclicker);
        autoprice = Math.round(autoprice * 1.5) ;
        update()
    }else {
        alert("You dont have enough cookies")
    }
}

function save() {
    localStorage.setItem("cookiecount", cookiecount);
    localStorage.setItem("autoClick", autoclicker);
}

function load() {
    cookiecount = localStorage.getItem("cookiecount");
    cookiecount = parseInt(cookiecount);
    autoclicker = localStorage.getItem("autoClick");
    autoclicker = parseInt(autoclicker);
    update()
}

function bakeCookie() {
    cookiecount += cpc;
    document.getElementById('text').innerHTML = cookiecount + " Cookies";
    document.title = cookiecount + " Cookies";

}

function hireBaker() {
    if(cookiecount >= bakerprice) {
        cpc = Math.round(cpc + 1.1);
        bakers += 1;
        cookiecount = Math.round(cookiecount +bakerprice);
        bakerprice = Math.round(bakerprice * 1.7) ;
        update()
    } else {
        alert("You dont have enough cookies")
    }

    
}
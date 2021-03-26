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
var multipliercost = 200;
var multiplier = 0;
var multipliervalue = 1;

function update() {
  document.getElementById("text").innerHTML = bowlcount + " Bowls";
  document.title = bowlcount + " Bowls";
  document.getElementById("amountAutoClick").innerHTML = "Auto clickers: " + autoclicker;
  document.getElementById("costAutoCliker").innerHTML = "Auto Clickers cost:  " + autoprice;
  document.getElementById("auto_cps").innerHTML = "Bowls per second: " + auto_cps;
  document.getElementById("chefPrice").innerHTML = "Chefs cost: " + chefPrice;
  document.getElementById("chefAmount").innerHTML = "Chefs: " + chefs;
  document.getElementById("cookiePerClick").innerHTML = "Bowls per click: " + bpc;
  document.getElementById("resturantamount").innerHTML = "Resturants: " + resturants;
  document.getElementById("resturantcps").innerHTML = "Bowls per second: " + resturantcps;
  document.getElementById("resturantcost").innerHTML = "Resturants cost: " + resturantcost;
  document.getElementById("bps").innerHTML =
    (auto_cps + resturantcps) * multipliervalue + " bowls per second";
  document.getElementById("multiplierPrice").innerHTML = "Costs: " + multipliercost;
  document.getElementById("multiplierAmount").innerHTML = "Amount: " + multiplier;
}

function timer() {
  bowlcount += auto_cps * multipliervalue;
  bowlcount += resturantcps * multipliervalue;
  update();
}

setInterval(timer, 1000);
setInterval(save, 10000);
setInterval(load, 10000);

function makeBowl() {
  bowlcount += bpc;
  update();
}

function hireChef() {
  if (bowlcount >= chefPrice) {
    bpc = Math.round(bpc + 1.1);
    chefs += 1;
    bowlcount = Math.round(bowlcount - chefPrice);
    chefPrice = Math.round(chefPrice * 1.7);
    update();
  } else {
    alert("You dont have enough cookies");
  }
}

function buymultiplier() {
  if (bowlcount >= multipliercost) {
    bowlcount = Math.round(bowlcount - multipliercost);
    multiplier += 1;
    multipliervalue = multiplier * 2;
    multipliercost = Math.round(multipliercost * 1.5);
    update();
  } else {
    alert("You dont have enough cookies");
  }
}

function buyResturant() {
  if (bowlcount >= resturantcost) {
    bowlcount = Math.round(bowlcount - resturantcost);
    resturants = resturants + 1;
    resturantcps = Math.round(5.5 * resturants * multipliervalue);
    resturantcost = Math.round(resturantcost * 1.5);
    update();
  } else {
    alert("You dont have enough cookies");
  }
}

function buyAutoClicker() {
  if (bowlcount >= autoprice) {
    bowlcount = bowlcount - autoprice;
    autoclicker += 1;
    auto_cps = Math.round(1.1 * autoclicker);
    autoprice = Math.round(autoprice * 1.5);
    update();
  } else {
    alert("You dont have enough cookies");
  }
}

function save() {
  localStorage.setItem("bowlcount",bowlcount );
  localStorage.setItem("bpc",bpc );
  localStorage.setItem("chefPrice",chefPrice );
  localStorage.setItem("autoclicker",autoclicker );
  localStorage.setItem("chefs",chefs );
  localStorage.setItem("autoprice",autoprice );
  localStorage.setItem("auto_cps",auto_cps );
  localStorage.setItem("resturantcps",resturantcps );
  localStorage.setItem("resturants",resturants );
  localStorage.setItem("resturantcost",resturantcost );
  localStorage.setItem("multipliercost",multipliercost );
  localStorage.setItem("multiplier",multiplier );
  localStorage.setItem("multipliervalue",multipliervalue );
  update();
}

function load() {
  bowlcount = localStorage.getItem("bowlcount ");
  bowlcount = parseInt(bowlcount );
  bowlcount = localStorage.getItem("bpc ");
  bowlcount = parseInt(bpc );
  bowlcount = localStorage.getItem("chefPrice ");
  bowlcount = parseInt(chefPrice );
  bowlcount = localStorage.getItem("autoclicker ");
  bowlcount = parseInt(autoclicker );
  bowlcount = localStorage.getItem("chefs ");
  bowlcount = parseInt(chefs );
  bowlcount = localStorage.getItem("autoprice");
  bowlcount = parseInt(autoprice);
  bowlcount = localStorage.getItem("auto_cps");
  bowlcount = parseInt(auto_cps);
  bowlcount = localStorage.getItem("resturantcps");
  bowlcount = parseInt(resturantcps);
  bowlcount = localStorage.getItem("resturants");
  bowlcount = parseInt(resturants);
  bowlcount = localStorage.getItem("resturantcost");
  bowlcount = parseInt(resturantcost);
  bowlcount = localStorage.getItem("multipliercost ");
  bowlcount = parseInt(multipliercost );
  bowlcount = localStorage.getItem("multiplier ");
  bowlcount = parseInt(multiplier );
  bowlcount = localStorage.getItem("multipliervalue ");
  bowlcount = parseInt(multipliervalue );
}











// start header

// Start Nav
getnavicons = document.querySelector('.navicons');
getline = document.querySelector('.line');

getnavicons.addEventListener('click', function(){
    getline.classList.toggle("crossxs");
});

// End Nav

// start banner
var getintroduce = document.querySelector(".introduce");
var getreadmore = document.querySelector(".redmorebtn");
var getseeless = document.querySelector(".seeless");
var getdots = document.querySelector(".dots");

getreadmore.addEventListener("click", function(){
    getseeless.classList.toggle('seemore');
    getdots.classList.toggle('seemore');
    if(getreadmore.textContent = "Read More"){
        getreadmore.textContent =  "Read Less";
    }else{
        getreadmore.textContent =  "Read More";
    }
});


// end banner
// end header
// Start footer
var getyear = document.querySelector(".getyear");


var nowgetyear = new Date().getUTCFullYear();

console.log(nowgetyear);


getyear.textContent = nowgetyear;
// End footer

// scroll back to top 
var getprogresses = document.querySelector(".progresses");
var getleft1 = document.getElementById("toleft1");
var getright1 = document.getElementById("toright1");
var gettop1 = document.getElementById("totop1");

window.addEventListener("scroll", function(){
    getprogresses.classList.toggle("top",window.scrollY >= 500);
    // console.log(this.scrollY);
    getleft1.classList.toggle("ani-left",window.scrollY >= 700);
    getright1.classList.toggle("ani-right",window.scrollY >= 700);
    gettop1.classList.toggle("ani-top",window.scrollY >= 700);
});

getprogresses.addEventListener("click",function(){

    // console.log("hey");
    window.scrollTo(0,0);
});

var scroll = window.scrollY;


// scroll back to top 
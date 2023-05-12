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

// Start pagination
function getPageList(totalPages, page, maxLength){
	function range(start, end){
		return Array.from(Array(end - start + 1), (_, i) => i + start);
	}

	var sideWidth = maxLength < 9 ? 1 : 2;
	var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
	var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

	if(totalPages <= maxLength){
		return range(1, totalPages);
	}

	if(page <= maxLength - sideWidth - 1 - rightWidth){
		return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
	}

	if(page >= totalPages - sideWidth - 1 - rightWidth){
		return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));
	}

	return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

// typeed 
var typed = new Typed('.auto-types', {
	strings: [
		'<span>Zwe Aung Naing</span><span class="text-light">.</span>', 
		'<span style="color:#ec650d;">Web Developer</span><span class="text-light">.</span>',
		'<span style="color:#6e2bf1;">Web Designer</span><span class="text-light">.</span>',
		'<span class="text-primary">Video Editor</span><span class="text-light">.</span>',
		'<span style="color:#92e767;">Photo Editor</span><span class="text-light">.</span>'],
	typeSpeed: 70,
	backSpeed: 70,
	smartBackspace: true,
	loop: true
});
// typeed 

$(function(){
	var numberOfItems = $(".card-container .cards").length;
	var limitPerPage = 6; //How many card items visible per a page
	var totalPages = Math.ceil(numberOfItems / limitPerPage);
	var paginationSize = 7; //How many page elements visible in the pagination
	var currentPage;

	function showPage(whichPage){
		if(whichPage < 1 || whichPage > totalPages) return false;

		currentPage = whichPage;

		$(".card-container .cards").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

		$(".pagination li").slice(1, -1).remove();

		getPageList(totalPages, currentPage, paginationSize).forEach(item => {
		$("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
		.toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
		.attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
		});

		$(".previous-page").toggleClass("disabled", currentPage === 1);
		$(".next-page").toggleClass("disable", currentPage === totalPages);
		return true;
	}

	$(".pagination").append(
		$("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("<")),
		$("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text(">"))
	);

	$(".card-content").show();
	showPage(1);

	$(document).on("click", ".pagination li.current-page:not(.active)", function(){
		return showPage(+$(this).text());
	});

	$(".next-page").on("click", function(){
		return showPage(currentPage + 1);
	});

	$(".previous-page").on("click", function(){
		return showPage(currentPage - 1);
	});
});
	  
// End pagination
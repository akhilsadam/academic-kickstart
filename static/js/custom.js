function resetHeight(){

let article = document.querySelector('.inner');
//document.querySelector('#top');
let main = document.getElementById('main');

//if(main){
//alert("main");
//}else{
//alert("main FAILED");
//}

//var pseudoBeforeHeight = window.getComputedStyle(article, ':before').height;
//var offHeight = parseInt(pseudoBeforeHeight);
var offHeight = article.scrollHeight;
//var vWidth = document.documentElement.clientWidth;
var verticalHeight = document.documentElement.clientHeight;
let offsetHeight = offHeight + 50;
// + 0.25*verticalHeight;
//let offsetWidth = vWidth;

//alert(offHeight);

let offd = offsetHeight + 'px'

//if(offsetHeight){
//alert(offsetHeight);
//alert("Height success");
//}else{
//alert("Height FAILED");
//}

main.style.setProperty("height",offd, "important");
main.style.setProperty("height",offd, "important");
//document.getElementById('main').style.setProperty("", "red", "important"); = offsetWidth+'px';
var gHeight = main.offsetHeight;

console.log("Height");

//if(gHeight){
//alert(gHeight);
//alert("Height success");
//}else{
//alert("Height FAILED");
//}
}




document.addEventListener("DOMContentLoaded", function(event) {
	resetHeight();
});

window.addEventListener('load', function() {
	resetHeight();
	//document.querySelector(".skill").addEventListener("hover",resetHeight());
});

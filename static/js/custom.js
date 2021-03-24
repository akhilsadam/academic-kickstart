
//alert("CustomJS");


//let element = document.createElement("div");
//element.className = "bkgd"; 
//element.id = "bkgd"; 
//let uwp = document.querySelector('.universal-wrapper.pt-3');
//element.appendChild(document.createTextNode(''));
//document.getElementById('top').insertBefore(element,uwp);


let article = document.querySelector('#top');
let main = document.querySelector('#main');

if(main){
//alert(main);
}else{
//alert("mian FAILED");
}

var offHeight = article.scrollHeight;
//var vWidth = document.documentElement.clientWidth;
var verticalHeight = document.documentElement.clientHeight;
let offsetHeight = offHeight + 0.25*verticalHeight;
//let offsetWidth = vWidth;
let offd = offsetHeight + 'px'

if(offsetHeight){
//alert(offsetHeight);
//alert("Height success");
}else{
//alert("Height FAILED");
}
main.style.setProperty("height",offd, "important");
//document.getElementById('main').style.setProperty("", "red", "important"); = offsetWidth+'px';
var gHeight = main.offsetHeight;

if(gHeight){
//alert(gHeight);
//alert("Height success");
}else{
//alert("Height FAILED");
}

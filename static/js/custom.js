alert("Script!!");


alert("CustomJS");


var offsetHeight = document.getElementsByClassName('article-style')[0].offsetHeight;

if(offsetHeight){
alert(offsetHeight);
}else{
alert("Height FAILED");
}
document.querySelector('#top::after').style.height = offsetHeight+'px';
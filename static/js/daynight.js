window.addEventListener('load', function styles() {

var isnight = true;

lights = document.querySelector('link#lightbar');
darks = document.querySelector('link#darkbar');

	function night() {
            lights.disabled = true;
	    darks.disabled = false;
	    isnight=true;
        }

        function day() {
            lights.disabled = false;
	    darks.disabled = true;
	    isnight=false;
        }


//alert(isSiteThemeDark);
if(isSiteThemeDark)
{
  night();
}
else
{
  day();
}
var toggle = document.querySelector('.js-dark-toggle');
//alert(toggle);
toggle.addEventListener("click", function styles2() {
//alert("toggled");
    if (isnight && toggle.children[0].className === "fas fa-moon") {
        day();
    } else {
        night();
    }
});

});








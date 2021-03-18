//alert("Script loading!");
if(gsap){
//alert("GSAP loaded");
}else{
alert("GSAP FAILED");
}
if(ScrollTrigger){
//alert("st loaded");
}else{
alert("st FAILED");
}
gsap.registerPlugin(ScrollTrigger);
//alert("Script loaded!");


const video = document.querySelector("#bgVideo");
let videoDuration;
video.onloadedmetadata = function() {
  console.log("Loaded");
  videoDuration = this.duration;
};

function init() {
  const st = ScrollTrigger.create({
    trigger:".intro",
    start:"top top",
    end:"bottom+=top",
    markers:true,
    pin:true,
    scrub: true,
    onUpdate: (self) => {
      console.log(self.progress);
      videoDuration = videoDuration || 1
      video.currentTime = self.progress * videoDuration;
    }
  })
  }

window.addEventListener("load", init);
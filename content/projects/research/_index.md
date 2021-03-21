---
title: 

# View.
#   1 = List
#   2 = Compact
#   3 = Card
#   4 = Citation
view: 1

# Optional header image (relative to `static/img/` folder).
header:
  caption: ""
  image: ""
---
<script defer src="../../js/scrollMain.js"></script>
<script type="text/javascript"
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
<h1>Research</h1>
<hr/>
<div class="utkl hblur">
<div class="text bold">
Positron Emission Tomography Research: Whole-Body PET <note class="notet">(in progress, under Dr.Karol Lang of UT Austin, Tools:Geant4,ROOT,&Python)</note>
 <div style="font-size:small;">&emsp;&emsp;Please refer to the right presentation for additional details. The most up-to-date information can be found on the <a href="http://www.hep.utexas.edu/utkl/index.html">UTKL Research Group Website</a></note>. <note class="notet">(last updated 3/20/2021)</note></div>
 <div width="100%" style="height:360px;">
   <iframe class="rhalign" src="https://onedrive.live.com/embed?cid=A7FD52E0996F5531&amp;resid=A7FD52E0996F5531%2119146&amp;authkey=AA4JA7wWT28YLF4&amp;em=2&amp;wdAr=1.7777777777777777" width="48.3%" height="100%" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
   <iframe class="rhalign" width="51.7%" height="100%" src="https://www.youtube-nocookie.com/embed/4XN8zhHNFVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </div>
 <note class="notet" style="position:relative; left: 39%;margin:0 auto;">Copyright © 2017 UTKL Research Group <a href="http://www.hep.utexas.edu/utkl/index.html">(Website)</a></note>
</div>
</div>
<hr/>
<div class="utm hblur">
<div class="text bold">
Measurement of Phonon Angular Momentum <note class="notet">(in progress, under Dr.John Markert of UT Austin, Tools:Python)</note>
 <div style="font-size:small;">&emsp;Initial design and use of capacitive and fiber-optic-interferometer systems to measure the predicted[<a href="http://www.cqtes.cn/oldweb/publications/2014-PhysRevLett.112.085503.pdf">PRL 112,085503(2014)</a>] macroscopic phonon angular momentum. <note class="notet">(last updated 3/20/2021)</note></div>
 <div width="100%" style="height:360px;">
   <iframe class="halign" src="http://www.cqtes.cn/oldweb/publications/2014-PhysRevLett.112.085503.pdf" style="width:50%; height:100%;" frameborder="0"></iframe>
   <iframe src="https://onedrive.live.com/embed?cid=A7FD52E0996F5531&amp;resid=A7FD52E0996F5531%2119149&amp;authkey=ANx3Seg9pohvF2c&amp;em=2&amp;wdAr=1.7777777777777777" width="48.3%" height="100%" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
 </div>
 <note class="notet" style="position:relative; left: 28.3%;margin:0 auto;">Copyright © 2020 Dr.John Markert et. al. <a href="https://web2.ph.utexas.edu/~markweb/">(Magnetism and Superconductivity Group Website)</a></note>
</div>
</div>
<hr/>
<div class="algor hblur">
<div class="text bold">
Algorithm Research/Collection (personal, on hiatus)
<div>&emsp;&emsp;<a href="https://github.com/akhilsadam/Optimization">Optimization</a>  - a simple alternative to gradient descent <note class="notet">(complete, Tools:Rust)</note><br></div>
<note class="notet">
<div>&emsp;&emsp;&emsp;&emsp;&emsp;gradient descent: $x_{n+1} = x_n - step\_size*f'(x)$, where step_size is the learning rate.<br></div>
<div>&emsp;&emsp;&emsp;&emsp;&emsp;'quadratic' descent: $x_{n+1} = x_n - step\_size*f'(x)/(f''(x)+epsilon)$, where epsilon is a small value, and step_size is the learning rate.<br></div>
<div>&emsp;&emsp;&emsp;&emsp;&emsp;The example below illustrates the advantage of 'quadratic' descent on the function: $f(x)=4x^2+x^4-0.5x^5+0.2x^6$.<br></div>
</note>
<div style="height:400px;style="position:relative; left: 10%;">
  <iframe class="rhalign" src="https://www.desmos.com/calculator/33cmxyur7j" width="47%" style="min-height:400px"></iframe>
  <iframe class="rhalign" src="https://play.rust-lang.org/?version=stable&mode=release&edition=2018&gist=bc0eaa7a5880ada4b7d72f696c0951ed" style="width:47%; height:100%;"></iframe>
</div>
<div>&emsp;&emsp;<a href="https://github.com/akhilsadam/Isovist">Isovist</a>  -  a collection of visibility algorithms <note class="notet">(only one algorithm, hiatus, in-progress, Tools:Rust)</note><br></div>
<note class="notet">
<div style="position:relative; left: 5%; width:95%;">Isovist <a href="https://en.wikipedia.org/wiki/Isovist">(an architectural concept)</a> 'blind' volume calculation via raycasting. The goal is to eventually use isovist volume for optimization loss functions to better characterize the neighborhood of critical values - where each function call is expensive, but not as expensive as the derivative. The lower the isovist volume, the sharper (and probably more optimal) the minimum. Still mostly in idea form due to the computational cost. (Animate L in the graphical embed to see how the isovist calculation changes based upon choice of upper limit!)<br></div>
</note>
<div style="height:400px;style="position:relative; left: 10%;">
  <iframe class="rhalign" src="https://www.desmos.com/calculator/q0p8yofs9p" width="47%" style="min-height:400px"></iframe>
  <iframe class="rhalign" src="https://play.rust-lang.org/?version=stable&mode=release&edition=2018&gist=e24578be1b8dcb6fd92e31cb37a98c0f" style="width:47%; height:100%;"></iframe>
</div>
<div>&emsp;&emsp;<a href="https://github.com/akhilsadam/hilbertResynth">hilbertResynth</a>  - a procedural resynthesizer of 3D models<note class="notet">(hiatus, in-progress, Tools:Rust)</note><br></div>
<note class="notet">
<div style="position:relative; left: 5%; width:95%;">Based on <a href="https://github.com/anopara/multi-resolution-texture-synthesis">Multi-resolution Texture Synthesis (MRTS)</a> by <a href="https://github.com/anopara">Anastasia Opara</a>. The goal is use Hilbert space-filling curves <a href="https://en.wikipedia.org/wiki/Hilbert_curve">(Wikipedia)</a> to turn 3D models into 2D images, which are then resynthesized via the MRTS toolkit mentioned earlier. The resynthesized image will then be back-transformed into a 3D model via the Hilbert curve (left-to-right in the below picture). Still mostly in idea form due to input/output difficulties.<br></div>
</note>
<div style="position:relative;width:90%;height:170px;left:11%;">
  <div class="halign" style="position:relative;width:15%;">
    <img style="position:relative;margin:0 0;margin-top:15%;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Utah_teapot_simple_2.png/1200px-Utah_teapot_simple_2.png" alt="Courtesy of Wikipedia"></img>
  </div>
  <div class="halign" style="position:relative;width:15%;">
    <img style="position:relative;margin:0 0;" src="https://upload.wikimedia.org/wikipedia/commons/1/13/Hilbert3d-step3.png" alt="Courtesy of Wikipedia"></img>
  </div>
  <div class="halign" style="width:22%;">
    <img style="position:relative; margin:0 0;margin-top:0.5%;" src="https://github.com/anopara/multi-resolution-texture-synthesis/raw/master/TextureSynthesis_6.gif" alt="Courtesy of Anastasia Opara"></img>
  </div>
  <div class="halign" style="width:15%;">
  <img style="position:relative;margin:0 0;" src="https://upload.wikimedia.org/wikipedia/commons/1/13/Hilbert3d-step3.png" alt="Courtesy of Wikipedia"></img>
  </div>
  <div class="halign" style="position:relative;width:15%;">
    <img style="position:relative;margin:0 0;margin-top:15%;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Utah_teapot_simple_2.png/1200px-Utah_teapot_simple_2.png" alt="Courtesy of Wikipedia"></img>
  </div>
</div>
<note class="notet" style="position:relative; left: 24.0%;margin:0 auto;">Copyright © 2021 Akhil Sadam (MIT License). Pictures courtesy of Anastasia Opera and Wikipedia.</a></note>
</div>
</div>
<hr/>
<p class="text hc" style="position:relative; left: 38%; width: 100%;font-size:large;margin:0 auto;">Thank you for reading this far.</p>
<p class="text hc" style="position:relative; left: 37%; width: 100%;font-size:large;">Advice or questions appreciated!</p>
<p class="text hc" style="position:relative; left: 13%; width: 100%;font-size:large;margin:0 auto;">Content on these & following pages have <u>all rights reserved</u> by their respective holders as intellectual property.</p>
<p class="text hc" style="position:relative; left: 20%; width: 100%;font-size:medium;">Please do not copy/publish or otherwise disseminate this information without explict permission.</p>
</div>
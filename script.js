let cnv = document.getElementById('canvas');
let ctx = cnv.getContext('2d');

cnv.width = 400;
cnv.height = 400;

requestAnimationFrame(loop);

function loop() {
  
  
     requestAnimationFrame(loop);
}

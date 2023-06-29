export const sunLogo = (canvaIconContainer)=> {
  canvaIconContainer.className="canvaIconContainer"
  let rays = document.createElement('div');
  rays.id = 'rays';
  rays.className = 'rays';
  let sun = document.createElement('div');
  sun.id = 'sun';
  sun.className = 'sun';
 
  canvaIconContainer.append(rays);
  canvaIconContainer.append(sun);
      

}
// still to do 
export const moonLogo = (canvaIconContainer)=> {
  canvaIconContainer.className="canvaIconContainer"
/*   <div id="star1" class="star"></div>
  <div id="moon"></div>
  <div id="star2" class="star"></div>
  <div id="star3" class="star"></div> */
 
      

}





//logo canvas
const canvasElements = document.querySelectorAll('.logo');
const ctxArray = [];

// Obtenir le contexte pour chaque élément canvas
canvasElements.forEach((canvas) => {
  const ctx = canvas.getContext('2d');
  ctxArray.push(ctx);
});

// pos content canvas
let sunPosition = 0;
let cloudPosition = 0;
let cloudPosition2 = 0;

function drawLogo() {
  // Parcourir tous les contextes et dessiner sur chaque canvas
  ctxArray.forEach((ctx) => {
    // delete canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // sun
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(ctx.canvas.width / 2 + sunPosition, ctx.canvas.height / 2, 40, 0, Math.PI * 2);
    ctx.fill();

    // clouds
    ctx.fillStyle = '#87CEEB';
    ctx.beginPath();
    ctx.arc(ctx.canvas.width / 2 - 40 + cloudPosition, ctx.canvas.height / 2 - 10, 30, 0, Math.PI * 2);
    ctx.arc(ctx.canvas.width / 2 + 40 + cloudPosition, ctx.canvas.height / 2 - 10, 30, 0, Math.PI * 2);
    ctx.arc(ctx.canvas.width / 2 + cloudPosition, ctx.canvas.height / 2 - 30, 40, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#7c9ca8';
    ctx.beginPath();
    ctx.arc(ctx.canvas.width / 2 - 40 + cloudPosition2, ctx.canvas.height / 2 - 5, 30, 0, Math.PI * 2);
    ctx.arc(ctx.canvas.width / 2 + 40 + cloudPosition2, ctx.canvas.height / 2 - 5, 30, 0, Math.PI * 2);
    ctx.arc(ctx.canvas.width / 2 + cloudPosition2, ctx.canvas.height / 2 - 5, 40, 0, Math.PI * 2);
    ctx.fill();
  });

  // update positions
  sunPosition += 1;
  cloudPosition += 1.5;
  cloudPosition2 += 1.3;

  // update pos after at the end of the canvas
  ctxArray.forEach((ctx) => {
    if (sunPosition > ctx.canvas.width) {
      sunPosition = -40;
    }

    if (cloudPosition > ctx.canvas.width + 40) {
      cloudPosition = -40;
    }

    if (cloudPosition2 > ctx.canvas.width + 10) {
      cloudPosition2 = -40;
    }
  });

  // repeat animation
  requestAnimationFrame(drawLogo);
}

// start animation
drawLogo();

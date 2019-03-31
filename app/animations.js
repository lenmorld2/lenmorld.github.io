export function setupAnimation() {

	const divs = document.querySelector('.matrix');
	console.log(divs);

	divs.addEventListener("animationend", function(e) {
		console.log("dasds",e.classList);
		divs.classList.remove("animate");
	} );
}


// source: https://codepen.io/jude1/pen/WMqoBp


export function setupAnimation2() {
	let matrix = document.getElementById("matrix"),
  ctx = matrix.getContext("2d");

let config = {
  amount: 40, // of "data" rows going down (will incrase with time)
  speed: 70,  // time between movements in ms (lower = faster)
//   size: 15,   // in px
  size: 20,   // in px
  minLength: 5,
  maxLength: 11,
  firstColor: "#fff",
  rowColor: "#0f0",
  text: "lenny > _",
  textApperanceSpeed: 0.8, // should be higher when more colums are added...
  textTopOffset: 5,
  textLeftOffset: 10
}

let datarray = [],
  textSet = [];

let width = ctx.canvas.width = window.innerWidth,
  height = ctx.canvas.height = window.innerHeight;

let columnCount = Math.floor(width / config.size),
  rowCount = Math.floor(height / config.size);

let textTopOffsetCalculated = config.textTopOffset * config.size,
  textLeftOffsetCalculated = config.textLeftOffset * config.size,
  atChar = 0;

/*
Data colum object
=============
*/
function Data(x, textChar) {
  this.x = x;
  this.y = 0;
  this.textChar = textChar;
  this.history = [];
  this.historySizeMax = Math.floor(Math.random() * config.maxLength + config.minLength);
};

Data.prototype.update = function() {
  this.y += config.size;
  if (this.y >= height + this.historySizeMax * config.size) {
    datarray.splice(datarray.indexOf(this), 1);
    putData();
  }

  let nextChar;
  if (this.textChar != undefined && this.y == textTopOffsetCalculated) {
    nextChar = config.text[this.textChar];
    textSet.push(nextChar);

  } else nextChar = String.fromCharCode(60 + Math.floor(Math.random() * 62));

  this.history.unshift(nextChar);
  if (this.history.length > this.historySizeMax) this.history.pop();
};

Data.prototype.draw = function() {
  
  ctx.fillStyle = ctx.shadowColor = '#000';
  ctx.fillRect(this.x, this.y - config.size, config.size, config.size * 2);
  ctx.fillStyle = ctx.shadowColor = config.firstColor;
  ctx.fillText(this.history[0], this.x, this.y);

  let y;
  for (let i = 1; i < this.history.length; i++) {
    y = this.y - i * config.size;
    ctx.fillStyle = ctx.shadowColor = '#000';
    ctx.fillRect(this.x, y - config.size, config.size, config.size);
    ctx.fillStyle = ctx.shadowColor = config.rowColor;
    ctx.fillText(this.history[i], this.x, y);
  }

};

function putData() {
  if (atChar < config.text.length && Math.random() > config.textApperanceSpeed) datarray.push(new Data(textLeftOffsetCalculated + atChar * config.size, atChar++));
  else datarray.push(new Data(Math.floor(Math.random() * columnCount) * config.size));

}

function setupCanvas() {
  width = ctx.canvas.width = window.innerWidth;
  height = ctx.canvas.height = window.innerHeight;

  ctx.font = config.size + "px monospace";

  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.shadowBlur = 6;
}

window.addEventListener("resize", setupCanvas);

/*
Init & loop
=============
*/
setupCanvas();

setInterval(function() {
  ctx.clearRect(0, 0, width, height);

  // new rows generator
  if (datarray.length < config.amount) putData();

  // write normal letters
  for (let i = 0; i < datarray.length; i++) {
    datarray[i].update();
    datarray[i].draw();
  }

  // write fixed text
  ctx.fillStyle = config.firstColor;
  ctx.shadowColor = config.firstColor;
  for (let i = 0; i < textSet.length; i++) {
    ctx.fillStyle = ctx.shadowColor = '#000';
    ctx.fillRect(textLeftOffsetCalculated + config.size * i, textTopOffsetCalculated, config.size, config.size);
    ctx.fillStyle = ctx.shadowColor = config.firstColor;
    ctx.fillText(textSet[i], textLeftOffsetCalculated + config.size * i, textTopOffsetCalculated + config.size);

  }

}, config.speed);
}
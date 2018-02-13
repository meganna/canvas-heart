 
'use strict';

var canvas = document.getElementById('main');
var context = canvas.getContext("2d");

context.strokeStyle = '#775D6A';
context.fillStyle = '#F4828C';
context.lineWidth = 4;

var lineWidth = 1;
var padding = 15;
var quadHeight = (canvas.height - padding * 2) / 3;
var quadWidth = (canvas.width - padding * 2) / 3;

// context.beginPath();

// //horizontal
// context.moveTo(padding, padding + quadHeight);
// context.lineTo(canvas.width - padding, padding + quadHeight);
// context.moveTo(padding, padding + quadHeight * 2);
// context.lineTo(canvas.width - padding, padding + quadHeight * 2);

// //vertical
// context.moveTo(padding + quadWidth, padding);
// context.lineTo(padding + quadWidth, canvas.height - padding);
// context.moveTo(padding + quadWidth * 2, padding);
// context.lineTo(padding + quadWidth * 2, canvas.height - padding);

// context.stroke();

context.beginPath();

//top center
var controlPoint1 = {
	x: canvas.width/2,
	y: padding + 10,
}

//left middle
var controlPoint2 = {
	x: padding,
	y: padding + quadHeight * 2 - 30,
}

var controlPoint3 = {
	x: padding + 1.5*quadWidth,
	y: canvas.height - padding - .5*quadHeight + 30
}

var point2 = {
	x: 1/6 * (canvas.width - padding),
	y: padding + quadHeight * 2,
}

var controlPoint4 = {
	x: canvas.width - controlPoint2.x, 
	y: controlPoint2.y,
}

var point3 = {
	x: 5/6 * (canvas.width + padding),
	y: padding + quadHeight * 2,
}

var centerPoint = {
	x: canvas.width/2,
	y: padding + 10,
}

//left-top part
context.moveTo(padding, padding + quadHeight);
context.quadraticCurveTo(padding, padding, padding + quadWidth, padding);

//context.fillRect(controlPoint1.x, controlPoint1.y, 5, 5);
//left-center part
context.quadraticCurveTo(controlPoint1.x, controlPoint1.y, canvas.width/2, padding + quadHeight);

//context.fillRect(point2.x, point2.y, 5, 5);

//left-middle part
context.moveTo(padding, padding + quadHeight);
context.quadraticCurveTo(controlPoint2.x, controlPoint2.y, point2.x, point2.y);
//left-bottom
context.lineTo(padding + quadWidth,  5/6*(canvas.height - padding));
//left-center
context.quadraticCurveTo(controlPoint3.x, controlPoint3.y, canvas.width/2, canvas.height - padding);

// context.fillRect(controlPoint2.x, controlPoint2.y,5,5);
// context.fillRect(controlPoint3.x, controlPoint3.y, 5, 5);
// context.fillRect(controlPoint4.x, controlPoint4.y, 5, 5);

//right-top part
context.moveTo(canvas.width - padding, padding + quadHeight);
context.quadraticCurveTo(canvas.width - padding, padding, padding + quadWidth * 2, padding);
//right-center part
context.quadraticCurveTo(controlPoint1.x, controlPoint1.y, canvas.width/2, padding + quadHeight);
//------------------

//right-middle part
context.moveTo(canvas.width - padding, padding + quadHeight);
context.quadraticCurveTo(canvas.width - controlPoint2.x, controlPoint2.y, point3.x, point3.y);
//right-bottom
context.lineTo(canvas.width - (padding + quadWidth),  5/6*(canvas.height - padding));
//right-center
context.quadraticCurveTo(controlPoint3.x, controlPoint3.y, canvas.width/2, canvas.height - padding);

//context.fillRect(point3.x, point3.y, 5, 5);

context.fill();
context.stroke();

 
'use strict';

var canvas = document.getElementById('main');
var context = canvas.getContext("2d");

canvas.width  = 400;
canvas.height = 300;

context.strokeStyle = '#775D6A';
context.fillStyle   = '#F4828C';
context.lineWidth   = 4;

var padding = 15;

var quadHeight = (canvas.height - padding * 2) / 3;
var quadWidth  = (canvas.width - padding * 2) / 3;

var mainPoints = {
	centerBottom : {
		x: canvas.width/2,
		y: canvas.height - padding,
	},
	controlCenterBottom : {
		x: padding + 1.5*quadWidth,
		y: canvas.height - padding - .5*quadHeight + 30
	},
	leftBottom: {
		x: padding + quadWidth,
		y: (canvas.height - padding)*5/6,
	},
	leftMiddleBottom: {
		x: 1/6*(canvas.width - padding),
		y: padding + quadHeight*2,
	},
	leftMiddle: {
		x: padding,
		y: padding + quadHeight,
	},
	controlLeftMiddle: {
		x: padding,
		y: padding + quadHeight*2 - 30,
	},
	leftTop: {
		x: padding + quadWidth,
		y: padding,
	},
	controlLeftTop: {
		x: padding,
		y: padding,
	},
	centerTop: {
		x: canvas.width/2,
		y: padding + quadHeight,
	},
	controlCenterTop: {
		x: canvas.width/2,
		y: padding + 10,
	},
	rightTop: {
		x: padding + quadWidth * 2,
		y: padding,
	},
	controlRightTop: {
		x: canvas.width - padding,
		y: padding,
	},
	rightMiddle: {
		x: canvas.width - padding,
		y: padding + quadHeight,
	},
	controlRightMiddle: {
		x: canvas.width - padding,
		y: padding + quadHeight*2 - 30,
	},
	rightMiddleBottom: {
		x: 5/6 * (canvas.width + padding),
		y: padding + quadHeight * 2,
	},
	rightBottom: {
		x: canvas.width - (padding + quadWidth),
		y: 5/6*(canvas.height - padding),
	},

};

context.stroke();

context.beginPath();

context.moveTo(mainPoints.centerBottom.x, mainPoints.centerBottom.y);
context.quadraticCurveTo(mainPoints.controlCenterBottom.x, mainPoints.controlCenterBottom.y, mainPoints.leftBottom.x, mainPoints.leftBottom.y);
context.lineTo(mainPoints.leftMiddleBottom.x, mainPoints.leftMiddleBottom.y);
context.quadraticCurveTo(mainPoints.controlLeftMiddle.x, mainPoints.controlLeftMiddle.y, mainPoints.leftMiddle.x, mainPoints.leftMiddle.y);
context.quadraticCurveTo(mainPoints.controlLeftTop.x, mainPoints.controlLeftTop.y, mainPoints.leftTop.x, mainPoints.leftTop.y);
context.quadraticCurveTo(mainPoints.controlCenterTop.x, mainPoints.controlCenterTop.y, mainPoints.centerTop.x, mainPoints.centerTop.y);
context.quadraticCurveTo(mainPoints.controlCenterTop.x, mainPoints.controlCenterTop.y, mainPoints.rightTop.x, mainPoints.rightTop.y);
context.quadraticCurveTo(mainPoints.controlRightTop.x, mainPoints.controlRightTop.y, mainPoints.rightMiddle.x, mainPoints.rightMiddle.y);
context.quadraticCurveTo(mainPoints.controlRightMiddle.x, mainPoints.controlRightMiddle.y, mainPoints.rightMiddleBottom.x, mainPoints.rightMiddleBottom.y);
context.lineTo(mainPoints.rightBottom.x, mainPoints.rightBottom.y);
context.quadraticCurveTo(mainPoints.controlCenterBottom.x, mainPoints.controlCenterBottom.y, mainPoints.centerBottom.x, mainPoints.centerBottom.y);

context.fill();
context.stroke();

// //GRID
// context.beginPath();
// context.strokeStyle = '#AAA';
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
let canvas1 = document.getElementById("ex1");
let ctx1 = canvas1.getContext("2d");

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'blue';
ctx1.fillRect(0,0,50,50);
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'yellow';
ctx1.fillRect(0,370,30,30);
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'yellow';
ctx1.fillRect(30,370,30,30);
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'yellow';
ctx1.fillRect(0,350,30,30);
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'red';
ctx1.fillRect(350,0,50,50);
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'black';
ctx1.fillRect(340,370,30,30);
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'black';
ctx1.fillRect(370,370,30,30);
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'black';
ctx1.fillRect(370,340,30,30);
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'blue';
ctx1.strokeStyle = 'blue';
ctx1.moveTo(0,0);
ctx1.lineTo(200,200);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'red';
ctx1.strokeStyle = 'red';
ctx1.moveTo(400,0);
ctx1.lineTo(200,200);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'green';
ctx1.strokeStyle = 'green';
ctx1.moveTo(0,200);
ctx1.lineTo(400,200);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'green';
ctx1.strokeStyle = 'green';
ctx1.moveTo(200,200);
ctx1.lineTo(200,380);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = '';
ctx1.strokeStyle = 'green';
ctx1.arc(200,200,80,1*Math.PI,2*Math.PI);
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'yellow';
ctx1.strokeStyle = 'lightgreen';
ctx1.arc(100,270,20,0*Math.PI,2.0*Math.PI);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'yellow';
ctx1.strokeStyle = 'lightgreen';
ctx1.arc(300,270,20,0*Math.PI,2.0*Math.PI);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'cyan';
ctx1.strokeStyle = 'green';
ctx1.arc(200,400,50,1*Math.PI,2*Math.PI);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'cyan';
ctx1.strokeStyle = 'blue';
ctx1.arc(200,150,20,0*Math.PI,2.0*Math.PI);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 1;
ctx1.fillStyle = 'black';
ctx1.strokeStyle = 'black';
ctx1.font = "20px Arial";
ctx1.textAlign = "center";
ctx1.fillText("Desenvolvimento Web", 200, 80);
ctx1.strokeText("Desenvolvimento Web", 200, 80);
ctx1.closePath();

ctx1.beginPath();
ctx1.fillStyle = 'cyan';
ctx1.fillRect(0,160,40,80);
ctx1.closePath();

ctx1.beginPath();
ctx1.fillStyle = 'cyan';
ctx1.fillRect(360,180,40,40);
ctx1.closePath();

ctx1.beginPath();
ctx1.fillStyle = 'red';
ctx1.fillRect(150,200,50,50);
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.strokeStyle = 'green';
ctx1.arc(200,200,107,1*Math.PI,2*Math.PI);
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.strokeStyle = 'green';
ctx1.arc(200,400,80,1*Math.PI,2*Math.PI);
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.strokeStyle = 'green';
ctx1.arc(200,400,107,1*Math.PI,2*Math.PI);
ctx1.stroke();
ctx1.closePath();

let canvas2 = document.getElementById("ex2");
let ctx2 = canvas2.getContext("2d");

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#90FFD0';
ctx2.fillRect(0,0,400,400);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#FFFF30';
ctx2.arc(300,100,50,0*Math.PI,2.0*Math.PI);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'gray';
ctx2.fillRect(0,300,400,100);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#8B4513';
ctx2.fillRect(150,200,100,100);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#FF7050';
ctx2.moveTo(150,200);
ctx2.lineTo(200,150);
ctx2.lineTo(250,200);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#4FBFFF';
ctx2.fillRect(160,220,30,30);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#4FBFFF';
ctx2.fillRect(210,220,30,30);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#5F4526';
ctx2.fillRect(190,250,20,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#8B4513';
ctx2.fillRect(50,250,20,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#2E8B22';
ctx2.arc(60,230,30,0*Math.PI,2.0*Math.PI);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#8B4513';
ctx2.fillRect(350,310,20,40);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#2E8B22';
ctx2.arc(360,280,30,0*Math.PI,2.0*Math.PI);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#4A90FF';
ctx2.moveTo(0,250);
ctx2.arc(0,300,50,-0.5*Math.PI,0*Math.PI);
ctx2.lineTo(50,350);
ctx2.lineTo(150,350);
ctx2.arc(150,400,50,-0.5*Math.PI,0*Math.PI);
ctx2.lineTo(0,400);
ctx2.fill();
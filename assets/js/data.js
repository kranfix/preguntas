var data = [
  {
    img: "assets/img/avion.png",
    question:"Which is the oldest airline in the world?",
    alternatives:["Avianca","KML","Qantas"],
    answer:1
  },{
    img: "assets/img/barco1.png",
    question:"Which is the largest port in the world?",
    alternatives:["Port of Shanghai","Port of Singapore","Port of Rotterdam"],
    answer:0
  },{
    img: "assets/img/bicicleta.png",
    question:"What is the longest distance cycling backwards?",
    alternatives:["89.30 km","675.10 km","337.60 km"],
    answer:2
  },{
    img: "assets/img/bus.png",
    question:"What is the highest speed ever reached by a school bus?",
    alternatives:["590 km/h","320 km/h","245 km/h"],
    answer:0
  },{
    img: "assets/img/carro.png",
    question:"What is the longest car trip on one tank of gas?",
    alternatives:["2617 km","3568 km","1732 km"],
    answer:0
  },{
    img: "assets/img/camion.png",
    message:"Here are your answers:"
  }
];

let index = 0;
let page;
let pageN = 5;
let percent = 0;
let myAnswers = [];
let summited = false; 

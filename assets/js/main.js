/* Instansiamientos  de tags
  No necesariamente la mejor forma de hacerlo, pero
  es la que mejor ordena el programa a mi criterio
*/
var tags = {
  numberOfAnswered: document.getElementById('numberOfAnswered'),
  completedPercent: document.getElementById('completedPercent'),
  qImage: document.getElementById('qImage'),
  question: document.getElementById('Question'),
  a1: document.getElementById('a1'),
  a2: document.getElementById('a2'),
  a3: document.getElementById('a3'),
  bar: document.getElementById('progressBar'),
  Questions: document.getElementById('Questions'),
  answers: document.getElementById('myAnswers'),
  results: document.getElementById('myResults')
}

var index = 0;
var pageN = 5;
var percent = 0;
Answers = [];


function loadPage(){
  page = index + 1;
  tags.numberOfAnswered.innerHTML = `${page} of 5 answered`;

  percent =  page * 100 / pageN;
  tags.completedPercent.innerHTML = `${percent}% completado`;
  tags.bar.style = `width: ${percent}%;`;

  tags.qImage.src = data[index].img;

  tags.question.innerHTML = data[index].question;

  tags.a1.innerHTML = data[index].alternatives[0];
  tags.a2.innerHTML = data[index].alternatives[1];
  tags.a3.innerHTML = data[index].alternatives[2];

}

loadPage();

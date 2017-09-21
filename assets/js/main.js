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
  results: document.getElementById('myResults'),
  Message: document.getElementById('Message'),
  answersConfirmation: document.getElementById('answersConfirmation')
}

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

function insertAnswer(a){
  myAnswers.push(a);
  index++;
  if(index < 5){
    loadPage();
  } else {
    loadAnswerConfirmation()
  }
}

function loadAnswerConfirmation(){
  let str = "";
  for(let i = 0; i < pageN; i++){
    let chosenAnswer = "";
    let user_answer = myAnswers[i];
    chosenAnswer = data[i].alternatives[user_answer];

    let correctAnswer = "";
    if(summited){
      let data_answer = data[i].answer;
      correctAnswer = data[i].alternatives[data_answer];
    }
    str += `
      <div>
        ${i+1}. ${data[i].question}
        <span>${chosenAnswer}</span>
        <span>${correctAnswer}</span>
      </div>`
  }
  console.log(str);
  tags.answersConfirmation.innerHTML = str;
  tags.Questions.style.display = 'none';
  tags.answers.style.display = 'block';
}

function summitAnswer(){
  summited = true;
  loadAnswerConfirmation();
}

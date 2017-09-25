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
  answersConfirmation: document.getElementById('answersConfirmation'),
  bSubmit: document.getElementById('bSubmit'),
  bStart: document.getElementById('bStart')
}

function loadQuestionPage(){
  page = index + 1;
  tags.numberOfAnswered.innerHTML = `${page} of ${pageN} answered`;

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
  if(index < pageN){
    loadQuestionPage();
  } else {
    loadAnswersConfirmation()
  }
}

function loadAnswersConfirmation(){
  let str = "";
  for(let i = 0; i < pageN; i++){
    let user_answer = myAnswers[i];
    let chosenAnswer = data[i].alternatives[user_answer];

    let correctAnswer = "";
    let textColors = {
      chosenAnswer:"text-primary",
      correctAnswer:"text-danger"
    }

    if(answersSubmited){
      let data_answer = data[i].answer;

      if(data_answer == user_answer){
        textColors.chosenAnswer = "text-success";
        textColors.correctAnswer = "text-success";
      } else {
        correctAnswer = data[i].alternatives[data_answer];
        textColors.chosenAnswer = "text-danger";
        chosenAnswer = `<strike>${chosenAnswer}</strike>`;
        textColors.correctAnswer = "text-success";
      }
    }
    str += `
      <div>
        <span class="${textColors.chosenAnswer}">
          ${i+1}. ${data[i].question}
          ${chosenAnswer}
        </span>
        <span class="${textColors.correctAnswer}">${correctAnswer}</span>
      </div>`
  }
  tags.answersConfirmation.innerHTML = str;
  tags.Questions.style.display = 'none';
  tags.answers.style.display = 'block';
}

function submitAnswers(){
  answersSubmited = true;
  loadAnswersConfirmation();
  tags.bSubmit.style.display = 'none';
  tags.bStart.style.display = 'block';
}

function startQuiz(){
  initVariables();
  loadQuestionPage();
  tags.Questions.style.display = 'block';
  tags.answers.style.display = 'none';
  tags.bSubmit.style.display = 'block';
  tags.bStart.style.display = 'none';
}

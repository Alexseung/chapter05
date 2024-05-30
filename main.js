function hideAllQuestions() {
  const questions = document.querySelectorAll(
    '.question1, .question2, .question3, .question4, .question5'
  );
  questions.forEach(question => {
    question.style.display = 'none';
  });
}

function toggleQuestion(questionClass) {
  const question = document.querySelector(`.${questionClass}`);
  const currentDisplay = question.style.display;
  if (currentDisplay === 'none' || currentDisplay === '') {
    hideAllQuestions();
    question.style.display = 'block';
  } else {
    question.style.display = 'none';
  }
}

const button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
  toggleQuestion('question1');
});
const button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
  toggleQuestion('question2');
});
const button3 = document.getElementById('button3');
button3.addEventListener('click', () => {
  toggleQuestion('question3');
});
const button4 = document.getElementById('button4');
button4.addEventListener('click', () => {
  toggleQuestion('question4');
});
const button5 = document.getElementById('button5');
button5.addEventListener('click', () => {
  toggleQuestion('question5');
});

// -------------첫 코드--------------
// 일단 하나의 버튼으로 block과 none을 조절할 수 있도록함
// 문제1) 같은 방식으로 button 다섯개 전부 다 넣어주면 작동은 하지만 block이 된 요소가 계속 화면에 떠 있음,
// 다른 버튼을 누르면 사라지게 하고싶음
// 문제2) button1을 누르면 다른 모든 요소들 style.display를 none으로 바꾸어 주는거 해결, 하지만 코드가 길어지고 지저분해짐
// --> toggle함수를 만들고 ${} 등을 활용하여 조금 더 간략하게 해줌

// const button1 = document.getElementById('button1');
// button1.addEventListener('click', show1);
// function show1() {
//   let question1 = document.querySelector('.question1');
//   let currentDisplay1 = question1.style.display;
//   hideAllQuestions();

//   if (currentDisplay1 === 'none' || currentDisplay1 === '') {
//     question1.style.display = 'block';
//   } else {
//     question1.style.display = 'none';
//   }
// }

const quizDB = [
    {
        Questions : "Q1: What is the Full Form of HTML ?",
        a: "Hyper Text Language ",
        b: "Hyper Text Markup Language ",
        c: "Hyper Text Makeup Language",
        d: "Hyper Transcript Markup Language",
        ans:"ans2"
    },

    {
        Questions : "Q2: What does CSS stand for ?",
        a: "Creative Style Sheets",
        b: "Cascading Style Sheets ",
        c: "Computer Style Sheets",
        d: "Color Style Sheets",
        ans:"ans2"
    },
    {
        Questions : "Q3: Which property is used to change the background color?",
        a: 'color ',
        b: 'bgcolor ',
        c: 'background-color',
        d: 'background-colour',
        ans: "ans3"
    },
    {
        Questions : "Q4: What is the Full Form of HTTP ?",
        a: "Hyper Text Transfer Product ",
        b: "Hyper Text Title Protocol ",
        c: "Hyper Text Transfer Protocol",
        d: "Hyper Transcript Text Protocol",
        ans:"ans3"
    },

    {
        Questions : "Q5: Which sign does jQuery use as a shortcut for jQuery?",
        a: "the ? sign ",
        b: "the # sign",
        c: "the @ sign",
        d: "the $ sign",
        ans:"ans4"
    },
];

const Questions = document.querySelector('.Questions');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const Submit = document.querySelector('#Submit');


const showScore = document.querySelector('#showScore');


let questionsCount =0;
let score=0;

const answers = document.querySelectorAll('.answer');




const loadQuestions = () => {
    
    const questionsList = quizDB[questionsCount];

    Questions.innerHTML = questionsList.Questions;

    option1.innerHTML = questionsList.a;
    option2.innerHTML = questionsList.b;
    option3.innerHTML = questionsList.c;
    option4.innerHTML = questionsList.d;


}

loadQuestions();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((currtAnswerElement) => {
        if(currtAnswerElement.checked){
            answer = currtAnswerElement.id;
        }

        
    });
   
    return answer;

};

 const diselectAll = () => {
     answers.forEach((currtAnswerElement) => currtAnswerElement.checked = false);

 }

Submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);
    console.log(questionsCount);
    console.log(quizDB.length);

       if(checkAnswer === quizDB[questionsCount].ans){
         score++;
        };

        questionsCount++ ;
        diselectAll();


     if(questionsCount  < quizDB.length){
         loadQuestions();
     }

     else {
         showScore.innerHTML = `
               <h3> You Have Scored ${score}/${quizDB.length}</h3>
               <button class="btn" onclick="location.reload()"> Play Again </button> 
        
         `;
        
         showScore.classList.remove('scoreArea');
         

     }
});
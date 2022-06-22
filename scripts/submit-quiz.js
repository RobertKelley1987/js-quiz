import { ANSWERS } from './constants.js';
import { quizScore, scoreParagraph, quizForm, postQuizButtons } from './html-elements.js';

// function to hide quiz form, show results and modify each question  
export const submitQuiz = e => {

    e.preventDefault();

    let correctAnswers = 0; // total correct answers made by user
    const formData = new FormData(quizForm); // user's quiz responses from form

    // compare each user response to quiz answers
    for (let i = 1; i <= ANSWERS.length; i++) {

        // pull each answer from form data object
        let answer = formData.get(`q${i}`);

        // test if answer is correct
        if(answer === ANSWERS[i - 1]) {
            // increment counter
            correctAnswers++;
            // make checkmark visible to indicate correct answer
            document.getElementById(`q${i}-check`).style.display = 'block';
        } else {
            // make x mark visible to indicate incorrect answer
            document.getElementById(`q${i}-x`).style.display = 'block';
        }

        // add user response to HTML for user to review
        let userResponse = document.getElementById(`q${i}-user-response`);
        !answer ? userResponse.innerText = 'N/A' : userResponse.innerText = answer;

    }

    // add final score to HTML
    quizScore.innerText = `${correctAnswers} / 10`;

    showResultsPage();
    
}

const showResultsPage = () => {

    // hide main quiz form
    quizForm.style.display = 'none';

    // show html element with final score
    scoreParagraph.style.display = 'block';

    // display post-quiz options
    postQuizButtons.style.display = 'flex';

}
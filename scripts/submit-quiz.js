import { ANSWERS } from './constants.js';
import { quizScore, quizForm, submitButton } from './html-elements.js';
import { createMarkups } from './markup-quiz.js';
import { calculateScore } from './calculate-score.js';
import { showResultsPage } from './results-page.js';

// function to hide quiz form, show results and modify each question  
export const submitQuiz = e => {

    // prevent page refresh on form submission
    e.preventDefault(); 

    // save user responses from form to an array
    const formData = new FormData(quizForm);
    let userResponses = ANSWERS.map((answer, index) => formData.get(`q${index + 1}`));

    createMarkups(userResponses, ANSWERS);

    // add final score to HTML
    quizScore.innerText = calculateScore(userResponses, ANSWERS);

    hideQuiz();

    showResultsPage();
    
}

const hideQuiz = () => {

    // hide main quiz form
    quizForm.style.display = 'none';

    // disable and hide submit button
    submitButton.disabled = true;
    submitButton.style.display = 'none';

}

import { ANSWERS } from './constants.js';
import { quizForm } from './html-elements.js';
import { createMarkups } from './markup-quiz.js';
import { hideQuiz } from './quiz-page.js';
import { showResultsPage } from './results-page.js';

//--------------------------------------------------------------------------------
// NAME: submitQuiz
// PURPOSE: Marks up quiz with user responses and displays final score
// PARAMETERS: e - the event argument automatically generated on form submission
// RETURNS: Nothing
//--------------------------------------------------------------------------------

export const submitQuiz = e => {

    // prevent page refresh on form submission
    e.preventDefault(); 

    // save user responses from form to an array
    const formData = new FormData(quizForm);
    let userResponses = ANSWERS.map((answer, index) => formData.get(`q${index + 1}`));

    // add markups to html using user responses and display results
    createMarkups(userResponses, ANSWERS);
    hideQuiz();
    showResultsPage();
    
}

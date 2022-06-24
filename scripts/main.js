import { codeBoxes, quizForm, tryAgainButton, viewSolutionsButton } from './html-elements.js';
import { fadeInMany } from './fade-in.js';
import { hideResultsPage } from './results-page.js';
import { resetQuiz } from './reset-quiz.js';
import { showSolutionsPage } from './solutions-page.js';
import { submitQuiz } from './submit-quiz.js';

// show any visible code boxes on initial load
fadeInMany(codeBoxes);

// add event listener to fade in any visible code boxes as user scrolls 
window.addEventListener('scroll', () => fadeInMany(codeBoxes));

// add click listeners to submit, reset and view solutions buttons
quizForm.addEventListener('submit', e => submitQuiz(e));
tryAgainButton.addEventListener('click', () => resetQuiz());
viewSolutionsButton.addEventListener('click', () => {
    hideResultsPage();
    showSolutionsPage();
});

import { fadeInAllElements } from './fade-in-elements.js';
import { submitQuiz } from './submit-quiz.js';
import { resetQuiz } from './reset-quiz.js';
import { viewSolutions } from './view-solutions.js';
import { quizForm, tryAgainButton, viewSolutionsButton, codeBoxes } from './html-elements.js';


// show any visible code boxes on initial load
fadeInAllElements(codeBoxes);

// add event listener to fade in any visible code boxes as user scrolls 
window.addEventListener('scroll', () => _.debounce(fadeInAllElements(codeBoxes), 500));

// add click listeners to submit, reset and view answers to quiz
quizForm.addEventListener('submit', e => submitQuiz(e));
viewSolutionsButton.addEventListener('click', viewSolutions);
tryAgainButton.addEventListener('click', resetQuiz);
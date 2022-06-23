import { solutions, radioInputs, codeBoxes } from './html-elements.js';
import { fadeInAllElements } from './fade-in-elements.js';
import { removeMarkups } from './markup-quiz.js';
import { ANSWERS } from './constants.js';
import { hideResultsPage } from './results-page.js';

export const resetQuiz = () => {

        // hide solutions
        solutions.forEach(solution => solution.style.display = 'none');

        removeMarkups(ANSWERS);

        showQuiz();

        hideResultsPage();

        // deselect previous responses from radio buttons
        radioInputs.forEach(radioInput => radioInput.checked = false);

        // reset opacity of code blocks to zero so they can fade in on scroll
        codeBoxes.forEach(codeBox => codeBox.style.opacity = '0');
    
        // scroll to top of screen
        window.scroll(0,0);

        // show any visible code blocks
        fadeInAllElements(codeBoxes);

}
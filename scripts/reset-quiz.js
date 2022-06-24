import { ANSWERS } from './constants.js';
import { codeBoxes, radioInputs } from './html-elements.js';
import { fadeInMany } from './fade-in.js';
import { hideResultsPage } from './results-page.js';
import { hideSolutionsPage } from './solutions-page.js';
import { removeMarkups } from './markup-quiz.js';
import { showQuiz } from './quiz-page.js';

//--------------------------------------------------------------------------------
// NAME: resetQuiz
// PURPOSE: Resets marked up quiz to its original state and displays main quiz form
// PARAMETERS: None
// RETURNS: Nothing
//--------------------------------------------------------------------------------

export const resetQuiz = () => {

        // remove correct / incorrect svgs and user responses
        removeMarkups(ANSWERS);

        // deselect previous responses from radio buttons
        radioInputs.forEach(radioInput => radioInput.checked = false);

        // reset opacity of code blocks to zero so they can fade in on scroll
        codeBoxes.forEach(codeBox => codeBox.style.opacity = '0');

        // hide all content except main quiz
        hideSolutionsPage();
        hideResultsPage();
        showQuiz();
    
        // scroll user to top of screen
        window.scroll(0,0);

        // show any visible code blocks
        fadeInMany(codeBoxes);

}
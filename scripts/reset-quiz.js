import { solutions, radioInputs, quizForm, scoreParagraph, postQuizButtons, viewSolutionsButton, svgs, submitButton, codeBoxes } from './html-elements.js';
import { fadeInAllElements } from './fade-in-elements.js';

export const resetQuiz = () => {
        // hide solutions and display main quiz form
        solutions.forEach(solution => solution.style.display = 'none');
        quizForm.style.display = 'block';

        // hide final score and post quiz options
        scoreParagraph.style.display = 'none';
        postQuizButtons.style.display = 'none';

        // reset view solutions button to beginning visible state
        viewSolutionsButton.style.display = 'block';

        // bring back radio buttons and deselect all previous responses
        radioInputs.forEach(radioInput => {
            radioInput.style.display = 'grid';
            radioInput.checked = false;
        });
    
        // reset user responses in html to be blank
        for(let i = 1; i <= 10; i++) {
            document.getElementById(`q${i}-user-response`).innerText = '';
        }
    
        // hide all checkmark and x svgs
        svgs.forEach(svg => svg.style.display = 'none');
    
        // display submit button and remove disabled status
        submitButton.disabled = false;
        submitButton.style.display = 'block';

        // reset opacity of code blocks
        codeBoxes.forEach(codeBox => codeBox.style.opacity = '0');
    
        // scroll to top of screen
        window.scroll(0,0);

        // show any visible code blocks
        fadeInAllElements(codeBoxes);

}
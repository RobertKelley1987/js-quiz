import { quizForm, solutions, radioInputs, viewSolutionsButton, scoreParagraph, submitButton } from './html-elements.js';

export const viewSolutions = () => {

        // display main quiz form
        quizForm.style.display = 'block';

        // unhide solution to each problem in quiz html and hide radio buttons
        solutions.forEach(solution => solution.style.display = 'block');
        radioInputs.forEach(radioInput => radioInput.style.display = 'none');
    
        // hide final score and 'view solutions' button
        viewSolutionsButton.style.display = 'none';
        scoreParagraph.style.display = 'none';
    
        // disable and hide submit button
        submitButton.disabled = true;
        submitButton.style.display = 'none';
        
}
import { quizForm, radioInputs, solutions, tryAgainButton } from './html-elements.js';

export const showSolutionsPage = () => {

    // show main quiz form
    quizForm.style.display = 'block';

    // unhide solution to each problem in quiz html
    solutions.forEach(solution => solution.style.display = 'block');

    // hide radio buttons
    radioInputs.forEach(radioInput => radioInput.style.display = 'none');

    // show 'try again' button
    tryAgainButton.style.display = 'block';

}
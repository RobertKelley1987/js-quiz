import { quizForm, radioInputs, solutions, tryAgainButton } from './html-elements.js';

//--------------------------------------------------------------------------------
// NAME: showSolutionsPage
// PURPOSE: Displays main quiz with solutions and try again button
// PARAMETERS: None
// RETURNS: Nothing
//--------------------------------------------------------------------------------

export const showSolutionsPage = () => {

    // display main quiz form
    quizForm.style.display = 'block';

    // display solution to each problem in quiz html
    solutions.forEach(solution => solution.style.display = 'block');

    // hide radio buttons
    radioInputs.forEach(radioInput => radioInput.style.display = 'none');

    // display 'try again' button
    tryAgainButton.style.display = 'block';

}

//--------------------------------------------------------------------------------
// NAME: hideSolutionsPage
// PURPOSE: Hides main quiz with solutions and try again button
// PARAMETERS: None
// RETURNS: Nothing
//--------------------------------------------------------------------------------

export const hideSolutionsPage = () => {

    // hide main quiz form
    quizForm.style.display = 'none';

    // hide solution to each problem in quiz html
    solutions.forEach(solution => solution.style.display = 'none');

    // hide 'try again' button
    tryAgainButton.style.display = 'none';

}
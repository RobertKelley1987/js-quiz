import { quizForm, radioInputs, submitButton } from './html-elements.js';

//--------------------------------------------------------------------------------
// NAME: showQuiz
// PURPOSE: Displays main quiz form in html and enables submit button
// PARAMETERS: None
// RETURNS: Nothing
//--------------------------------------------------------------------------------

export const showQuiz = () => {

    // display main quiz form
    quizForm.style.display = 'block';

    // display radio buttons
    radioInputs.forEach(radioInput => radioInput.style.display = 'grid');

    // display submit button and remove disabled status
    submitButton.disabled = false;
    submitButton.style.display = 'block';

}

//--------------------------------------------------------------------------------
// NAME: hideQuiz
// PURPOSE: Hides main quiz form in html and disables submit button
// PARAMETERS: None
// RETURNS: Nothing
//--------------------------------------------------------------------------------

export const hideQuiz = () => {

    // hide main quiz form
    quizForm.style.display = 'none';

    // disable and hide submit button
    submitButton.disabled = true;
    submitButton.style.display = 'none';

}
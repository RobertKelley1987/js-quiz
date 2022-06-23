export const showQuiz = () => {

    // display main quiz form
    quizForm.style.display = 'block';

    // display radio buttons
    radioInputs.forEach(radioInput => radioInput.style.display = 'grid');

    // display submit button and remove disabled status
    submitButton.disabled = false;
    submitButton.style.display = 'block';

}
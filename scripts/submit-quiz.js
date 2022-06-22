import { ANSWERS } from './constants.js';
import { quizScore, scoreParagraph, quizForm, postQuizButtons } from './html-elements.js';

// function to hide quiz form, show results and modify each question  
export const submitQuiz = e => {

    e.preventDefault();

    // save user responses from form to an array
    const formData = new FormData(quizForm); // user's quiz responses from form
    let userResponses = ANSWERS.map((answer, index) => formData.get(`q${index + 1}`));

    // compare each user response to quiz answers
    for (let i = 0; i < ANSWERS.length; i++) {

        // test if answer is correct
        if(userResponses[i] === ANSWERS[i]) {
            // make checkmark visible to indicate correct answer
            document.getElementById(`q${i + 1}-check`).style.display = 'block';
        } else {
            // make x mark visible to indicate incorrect answer
            document.getElementById(`q${i + 1}-x`).style.display = 'block';
        }

        // add user response to HTML for user to review
        let userResponse = !userResponses[i] ? 'N/A' : userResponses[i];
        document.getElementById(`q${i + 1}-user-response`).innerText = userResponse;

    }

    // add final score to HTML
    quizScore.innerText = `${calculateScore(userResponses, ANSWERS)} / 10`;

    showResultsPage();
    
}

const showResultsPage = () => {

    // hide main quiz form
    quizForm.style.display = 'none';

    // show html element with final score
    scoreParagraph.style.display = 'block';

    // display post-quiz options
    postQuizButtons.style.display = 'flex';

}

const calculateScore = (userResponses, solutions) => {
        
        let correctAnswers = 0; // total correct answers made by user

        // compare each user response to quiz answers
        for (let i = 0; i < solutions.length; i++) {
            // test if answer is correct
            if(solutions[i] === userResponses[i]) {
                // increment counter
                correctAnswers++;

            } 
        }

        return correctAnswers;

}
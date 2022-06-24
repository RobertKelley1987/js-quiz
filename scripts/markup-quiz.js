import { ANSWERS } from './constants.js';
import { calcScore } from './calc-score.js';
import { quizScore } from './html-elements.js';

//--------------------------------------------------------------------------------
// NAME: createMarkups
// PURPOSE: Inserts correct responses, correction svgs and final score into html
// PARAMETERS: 
// userResponses - array of user's quiz responses
// answers - array of quiz answers
// RETURNS: Nothing
//--------------------------------------------------------------------------------

export const createMarkups = (userResponses, answers) => {

    // compare each user response to quiz answers
    for (let i = 0; i < answers.length; i++) {

        // test if answer is correct
        if(userResponses[i] === answers[i]) {
            // make checkmark visible to indicate correct answer
            document.getElementById(`q${i + 1}-check`).style.display = 'inline-block';
        } else {
            // make x mark visible to indicate incorrect answer
            document.getElementById(`q${i + 1}-x`).style.display = 'inline-block';
        }

        // if user left a question blank, replace blank answer with 'N/A'
        let userResponse = !userResponses[i] ? 'N/A' : userResponses[i];

        // add user response to HTML
        document.getElementById(`q${i + 1}-user-response`).innerText = userResponse;

    }

    // add final score to HTML
    quizScore.innerText = calcScore(userResponses, ANSWERS);

}

//--------------------------------------------------------------------------------
// NAME: removeMarkups
// PURPOSE: Removes user responses, correction svgs and final score from html
// PARAMETERS: answers - array of quiz answers
// RETURNS: Nothing
//--------------------------------------------------------------------------------

export const removeMarkups = answers => {

    // clear markups from each question in quiz
    for(let i = 1; i <= answers.length; i++) {

        // reset user response to be blank
        document.getElementById(`q${i}-user-response`).innerText = '';

        // remove correction svgs
        document.getElementById(`q${i}-check`).style.display = 'none';
        document.getElementById(`q${i}-x`).style.display = 'none';

    }

    // remove final score from HTML
    quizScore.innerText = '';
    
}
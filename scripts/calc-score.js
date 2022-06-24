//--------------------------------------------------------------------------------
// NAME: calcScore
// PURPOSE: calculates user's final quiz score
// PARAMETERS: 
// userResponses - array of user's quiz responses
// answers - array of quiz answers
// RETURNS: string showing total correct out of total number of questions
//--------------------------------------------------------------------------------

export const calcScore = (userResponses, answers) => {
        
    let correctAnswers = 0; // total correct answers made by user

    // compare each user response to quiz answers
    for (let i = 0; i < answers.length; i++) {
        // if answer is correct, increment counter
        if(answers[i] === userResponses[i]) {
            correctAnswers++;
        } 
    }

    return `${correctAnswers} / ${answers.length}`;

}
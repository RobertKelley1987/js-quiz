// DESC: function to calculate final quiz score
// PARAMETERS: 
// userResponses - array of user's quiz responses
// answers - array of quiz answers
// RETURNS: 
// a string representing total correct answers out of total number of questions

export const calculateScore = (userResponses, answers) => {
        
    let correctAnswers = 0; // total correct answers made by user

    // compare each user response to quiz answers
    for (let i = 0; i < answers.length; i++) {

        // test if answer is correct
        if(answers[i] === userResponses[i]) {

            // increment counter
            correctAnswers++;
            
        } 

    }

    return `${correctAnswers} / ${answers.length}`;

}
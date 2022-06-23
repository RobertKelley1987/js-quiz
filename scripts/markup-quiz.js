// DESC: function to add correct responses and correct / incorrect svgs to quiz html
// PARAMETERS: 
// userResponses - array of user's quiz responses
// answers - array of quiz answers
// RETURNS: nothing

export const createMarkups = (userResponses, answers) => {

    // compare each user response to quiz answers
    for (let i = 0; i < answers.length; i++) {

        // test if answer is correct
        if(userResponses[i] === answers[i]) {
            // make checkmark visible to indicate correct answer
            document.getElementById(`q${i + 1}-check`).style.display = 'block';
        } else {
            // make x mark visible to indicate incorrect answer
            document.getElementById(`q${i + 1}-x`).style.display = 'block';
        }

        // if user left a question blank, replace blank answer with 'N/A'
        let userResponse = !userResponses[i] ? 'N/A' : userResponses[i];

        // add user response to HTML
        document.getElementById(`q${i + 1}-user-response`).innerText = userResponse;

    }

}

// DESC: function to remove user responses and correct / incorrect svgs from quiz html
// PARAMETERS: 
// userResponses - array of user's quiz responses
// answers - array of quiz answers
// RETURNS: nothing

export const removeMarkups = answers => {

    // reset user responses in html to be blank
    for(let i = 1; i <= answers.length; i++) {
        document.getElementById(`q${i}-user-response`).innerText = '';
    }

    // hide all checkmark and x svgs
    svgs.forEach(svg => svg.style.display = 'none');
    
}
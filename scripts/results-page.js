import { scoreParagraph, tryAgainButton, viewSolutionsButton } from "./html-elements.js";

//--------------------------------------------------------------------------------
// NAME: showResultsPage
// PURPOSE: Displays final score and post-quiz option buttons
// PARAMETERS: None
// RETURNS: Nothing
//--------------------------------------------------------------------------------

export const showResultsPage = () => {

    // show html element with final score
    scoreParagraph.style.display = 'block';

    // display post-quiz option buttons
    tryAgainButton.style.display = 'block';
    viewSolutionsButton.style.display = 'block';

}

//--------------------------------------------------------------------------------
// NAME: hideResultsPage
// PURPOSE: Hides final score and post-quiz option buttons
// PARAMETERS: None
// RETURNS: Nothing
//--------------------------------------------------------------------------------

export const hideResultsPage = () => {

    // hide final score
    scoreParagraph.style.display = 'none';

    // hide post quiz options
    tryAgainButton.style.display = 'none';
    viewSolutionsButton.style.display = 'none';

}
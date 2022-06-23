import { scoreParagraph, tryAgainButton, viewSolutionsButton } from "./html-elements.js";

export const hideResultsPage = () => {

    // hide final score
    scoreParagraph.style.display = 'none';

    // hide post quiz options
    tryAgainButton.style.display = 'none';
    viewSolutionsButton.style.display = 'none';

}

export const showResultsPage = () => {

    // show html element with final score
    scoreParagraph.style.display = 'block';

    // display post-quiz option buttons
    tryAgainButton.style.display = 'block';
    viewSolutionsButton.style.display = 'block';

}
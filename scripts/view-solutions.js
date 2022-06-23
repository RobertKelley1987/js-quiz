import { showQuiz } from './quiz-page.js';
import { hideResultsPage } from './results-page.js';
import { showSolutionsPage } from './solutions-page.js';

export const viewSolutions = () => {

        hideResultsPage();

        showSolutionsPage();
        
}
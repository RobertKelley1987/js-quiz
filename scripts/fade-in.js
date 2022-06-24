//--------------------------------------------------------------------------------
// NAME: fadeInOne
// PURPOSE: sets opacity of an element to one if it is in the viewport
// PARAMETERS: element - element to fade in if it is on screen
// RETURNS: string showing total correct out of total number of questions
//--------------------------------------------------------------------------------

const fadeInOne = element => {

    let elementInViewport = element.getBoundingClientRect().top <= window.innerHeight - 150

    // if element is in viewport, change opacity to 1
    if(elementInViewport) {
        element.style.opacity = '1';
    }

}

//--------------------------------------------------------------------------------
// NAME: fadeInMany
// PURPOSE: Tests whether any element in a group of elements is in the viewport, and 
// makes those elements visible
// PARAMETERS: elements - element to fade in if it is on screen
// RETURNS: Nothing
//--------------------------------------------------------------------------------

export const fadeInMany = elements => {
    elements.forEach(el => fadeInOne(el));
    console.log('fade-in');
};
// function to test if an element is high enough in the viewport to be revealed
const elOnScreen = el => el.getBoundingClientRect().top <= window.innerHeight - 150;

// function to make element visible if it passes this test
const fadeInElement = el => {
    // test if element should be visible
    if(elOnScreen(el)) {
        // change opacity to 1
        el.style.opacity = '1';
    }
}

// function test a group of elements and make any elements on screen visible
export const fadeInAllElements = elements => elements.forEach(el => fadeInElement(el));
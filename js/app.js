/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
//create all list items and add them in ul elemnt
function createList() {
    //to loope all over all sections
    sections.forEach(section => {
        //get the name of the section
        sectionName = section.getAttribute('data-nav');
        //get the id of the section
        sectionLink = section.id;
        //creating item for each section
        listItem = document.createElement('li');
        //add the item html
        listItem.innerHTML = `<a class="menu__link" href=" #${sectionLink} ">${sectionName}</a>`;
        //add to menu
        menu.appendChild(listItem);

    })
}

function sectionInView(element) {
    //to identify the current viewed section based on the bounding
    let sectionpostion = element.getBoundingClientRect();
    return (sectionpostion.top >= 0);
}

function toggleActive() {
    for (section of sections) {
        //if section is in view currently
        if (sectionInView(section)) {
            if (!section.classList.contains(`your-active-class`)) {
                section.classList.add(`your-active-class`);
            }
        } else {
            section.classList.remove(`your-active-class`);
        }
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

createList();
// Add class 'active' to section when near top of viewport

document.addEventListener(`scroll`, toggleActive);
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active/
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
const sections = document.querySelectorAll('section');
const ulMenu = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 *
 */



/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function navMenu() {

    //loop over the sections
    for (const section of sections) {

        //create li and a elements
        const list = document.createElement('li');
        const link = document.createElement('a');

        //extract datanav using gatAttribute
        //add text to <a>
        link.innerHTML = section.getAttribute('data-nav');

        //append <a> to <li>
        link.classList = 'menu__link'
        list.appendChild(link);
        link.addEventListener('click', event => {
          event.preventDefault();
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
        //append <li> to fragment
        fragment.appendChild(list);
    };

    //append fragment to ul
    ulMenu.appendChild(fragment);
};

navMenu();

// Add class 'active' to section when near top of viewport
function addActiveClass(section) {
    // get the id from the section
    const id = section.getAttribute('id');

    // add the active class to the section
    document.querySelector(`#${id}`).classList.add('your-active-class');
}

//Removing the active class from the section
function removeActiveClass(section) {
    const id = section.getAttribute('id');
    document.querySelector(`#${id}`).classList.remove('your-active-class');
}

// calcualting when the section is active
function makeActiveSection() {
    sections.forEach(function(section){
        let elementOffset = section.getBoundingClientRect();
        if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
            addActiveClass(section);
        } else {
            removeActiveClass(section);
        }
    });
};
// event listener to the dom itself so
document.addEventListener('scroll', makeActiveSection);

// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll('.menu__link');
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}




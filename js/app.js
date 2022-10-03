// General variables for all Requires in project.
//I can use This Variable by .getElementById ==> const UL = document.getElementById("navbar__list");
// Or by .querySelector
// Select the first element by .querySelector
const UL = document.querySelector('#navbar__list');
// Select all sections by .querySelectorAll
const Sections = document.querySelectorAll('section');
/* End Global Variables */

// forEach help me loop over sections.
Sections.forEach( section => {
    //Create New Element ==> nLi.
    const nLi = document.createElement('li');
    // give style to Element
    nLi.style.color = 'red';
    nLi.style.margin = '0.25em';
    //Append element ==> nLi (Child) under UL (Parent).
    UL.appendChild(nLi);
    // get value for data-nav.
    const DataNav = section.getAttribute('data-nav');
    // Change text by .innerText or .textContent
    // nLi carries the value DataNav.
    nLi.innerText = DataNav;
    //Activate scrolling ,Example: when i enter at navBar section3 automatic goto section3 on page.
    nLi.addEventListener('click' , () => {
        // I can use .scrollTo or .scrollIntoView.
        section.scrollIntoView({ behavior: 'smooth', block: 'start' , inline: 'nearest' });
    });

});

//Creating intersection Observer API.
//From https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
//Create the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other:
/* let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }

  
  let observer = new IntersectionObserver(callback, options); */
/*Targeting an element to be observed

  Once you have created the observer, you need to give it a target element to watch:
  
  let target = document.querySelector('#listItem');
  observer.observe(target);
  
// the callback we setup for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
//we have different Methods to do it
/*let callback = (entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
*/
//Create intersection Observer API.
let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.20 ,
  };
  
  let observer = new IntersectionObserver(callback, options);
  // Make Loop for each section & pass it to API.
  Sections.forEach((EachSec) => {
    observer.observe(EachSec);

});

  // Define callback function.
  function callback(entries){
      entries.forEach((entry) => {
          // This Method To determine which section is active & add class to this active section.
          if(entry.isIntersecting){
          // To detect active section by data-nav / entry.Terget which carry active Section, To make sure which section is active use alert(activateDataNav); in cosole.
          let activateDataNav = entry.target.getAttribute('data-nav');
          
          //Add Active link.
          // select links by .querySelectorAll
          let links = document.querySelectorAll('li');
          links.forEach((link)=>{
            if(activateDataNav == link.textContent){
              links.forEach((actLink)=>{
                actLink.style.color = 'black';                
              });
              link.style.color = 'red';
            };
          });
          // End Add active link.

          // Remove active class
          Sections.forEach((aSec)=>{
              // i want to see if aSec contains a class or not. 
              if(aSec.classList.contains("your-active-class")) {
                  // Remove class from aSec.
                  aSec.classList.remove("your-active-class");
              };
          });
          // End Remove active class.

          // Add active class.
          if(!entry.target.classList.add("your-active-class")){
          };
          // End Add active class.
        };
      });
    };
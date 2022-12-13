let everything = document.querySelectorAll('*') 
let backgroundClasses = {};
let colorClasses = {};

everything.forEach((e) => {
    if (window.getComputedStyle(e).getPropertyValue('background-color')) {
        backgroundClasses[e.className] = window.getComputedStyle(e).getPropertyValue('background-color');
    }
    colorClasses[e.className] = getComputedStyle(e).getPropertyValue('color');
});



/**
 * get all elements
 * check property value of element
 * if property-value !== "" --> get class name
 * put class name in hash --> property-name: color
 */

 everything.forEach( e => {
    let backgroundProperties = window.getComputedStyle(e).getPropertyValue('background-color');
    if (backgroundProperties !== "") {
        let keyName = e.className !== "" ? e.className : e.tagName;
        backgroundClasses[keyName] = backgroundProperties;
  }
  });
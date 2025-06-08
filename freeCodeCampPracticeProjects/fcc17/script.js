//A spreadsheet

/**Functional Programming 
 * Functional Programming is a popular approach to software development. 
 * In Functional Programming, developers organize code into smaller functions, 
 * then combine those functions to build complex programs. */

const range = (start, end) => Array(end-start+ 1).fill(start).map((element, index) =>  element + index);

const charRange = () => {};

window.onload = () => {
    const container = document.getElementById("container");
    const createLabel = (name) => {
        const label = document.createElement("div");
        label.className =  "label";
        label.textContent = name;
        container.appendChild(label);
    };
};
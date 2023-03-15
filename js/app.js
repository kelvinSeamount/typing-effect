//SELECTING DOM ELEMENTS

const typeEl = document.querySelector(".type");

// Create an array of words we would like to display
const words = ["Developer", "UI-designer", "Devops-Engineer", "SQL-Analyst"];

//Here we initialize the individual words count
let count = 0;

//here we display the individual letters
let letterCount = 0;

// Create a function
const displayType = function () {
  if (count === words.length) {
    count = 0;
  }

  //select a current word to be displayed
  let displayWords = words[count];

  //to display the words letter by letter
  let letter = displayWords.slice(0, ++letterCount);
  typeEl.textContent = letter;
  if (letter.length === displayWords.length) {
    letterCount = 0;
    count++;
  }
  setTimeout(displayType, 380);
};
displayType();

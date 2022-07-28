// Initialize all the variables
let originalText = document.querySelector("#text-input");
let secretWords = document.querySelector("#secret-text");
let displayResult = document.querySelector("#result");
let submitButton = document.querySelector(".btn-submit");
let refreshBtn = document.querySelector(".btn-refresh");

// Add event listener to the submit button
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  redactText();
});

// refreshBtn.onclick = () => {
//   location.reload();
// };

function redactText() {
  // Get the original text from user input
  originalText = originalText.value.trim();

  // Get the secret words and store them in an array of strings
  secretWords = secretWords.value.trim().split(" ");

  for (let words of secretWords) {
    console.log(words);
    if (originalText.includes(words) === false) {
      return;
    } else {
      originalText = originalText.replaceAll(words, "****");
      displayResult.innerHTML = originalText;
    }
  }
}

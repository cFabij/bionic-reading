let rawText = document.querySelector("#raw-text");
let bionicText = document.querySelector("#bionic-text");

function changeToBionic() {
  bionicText.innerHTML = "";
  let text = document.querySelector("#text").value;
  let wordAnalyzer = text.split(" ");

  wordAnalyzer.forEach((word) => {
    let wordLength = word.length;
    let strongLength = Math.floor(wordLength / 2);

    if (strongLength == 0) {
      strongLength = 1;
    }

    let charStrong = "<strong>" + word.slice(0, strongLength) + "</strong>";

    word = word.substr(strongLength, word.length);

    word = charStrong + word + " ";

    bionicText.innerHTML += word;
  });
  rawText.innerHTML = text;
}

let changeButton = document.querySelector("#change-bionic");
changeButton.addEventListener("click", changeToBionic);

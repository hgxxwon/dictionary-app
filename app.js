const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const audio = document.getElementById("audio");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  const input = document.getElementById("word-input").value;
  fetch(`${url}${input}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `<div class="word">
        <h3>${input}</h3>
        <button onclick="playAudio()"><i class="fa-solid fa-volume-high"></i></button>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p>
    </div>
    <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
    <p class="word-example">${
      data[0].meanings[0].definitions[0].example || ""
    }</p>`;
      audio.setAttribute("src", `${data[0].phonetics[1].audio}`);
    })
    .catch(() => {
      result.innerHTML = `<h3>Couldn't find the word you're looking for! :(</h3>`;
    });
});

function playAudio() {
  audio.play();
}

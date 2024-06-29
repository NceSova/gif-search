import "./index.css";

const API_KEY = "hO0hgMqv01petXEKhgJbcKSFW91GYQuo";

const img = document.querySelector("img");
const button = document.querySelector("button");
const input = document.querySelector("input");
button.addEventListener("click", (e) => {
  const inputText = input.value;
  input.value = "";
  fetchGif(inputText);
});
function fetchGif(search: string) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${search}&weirdness=10`,
    {mode: "cors"}
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
}
fetchGif("");

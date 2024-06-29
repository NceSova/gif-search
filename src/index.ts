import {resolve} from "../webpack.common";
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
async function fetchGif(search: string) {
  const responce = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${search}&weirdness=10`,
    {mode: "cors"}
  );
  const catData = await responce.json();
  img.src = catData.data.images.original.url;
  return 1;
}
fetchGif("cats");

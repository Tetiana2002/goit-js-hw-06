function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  body: document.querySelector("body").style,
  changeColor: document.querySelector(".change-color"),
  textValue: document.querySelector(".color")
};
refs.changeColor.addEventListener("click", changeColor);
function changeColor() {
  const color = getRandomHexColor();
  refs.body.backgroundColor = color;
  refs.textValue.textContent = color
};

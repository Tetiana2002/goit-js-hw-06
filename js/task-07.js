const fontSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
fontSizeEl.addEventListener("input", onInput);
function onInput(e) {
    const value = e.target.value;
    textEl.style.fontSize = value + "px";
}
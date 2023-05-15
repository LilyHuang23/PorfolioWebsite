const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
});
// contact page
const inputs = document.querySelectorAll(".input");
function focusFunc() {
    let parent = this.parentNote;
    parent.classList.add("focus");
}
function blurFunc() {
    let parent = this.parentNote;
    parent.classList.remove("focus");
}
inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});
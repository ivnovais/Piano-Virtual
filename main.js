const keys = document.querySelectorAll('.key');
function playNote(event) {
  let audioKeyCode = getKeyCode(event);

  const key = document.querySelector(`[data-key="${audioKeyCode}"]`);
  const isKeyExists = key;
  if (!isKeyExists) {
    const errou = new Audio('sounds/faustao-errou.mp3');
    errou.play();
  } else {
    const keySound = document.querySelector(
      `audio[data-key="${audioKeyCode}"]`
    );
    keySound.currentTime = 0;
    keySound.play();
  }
}
function getKeyCode(event) {
  let keyCode;
  const isKeyboard = event.type === 'keydown';
  if (isKeyboard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }
  return keyCode;
}
keys.forEach((item) => {
  item.addEventListener('click', playNote);
});
window.addEventListener('keydown', playNote);

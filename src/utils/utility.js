
function getStyles (el, style) {
  return getComputedStyle(document.querySelector(el))[style]
}

function animatePseudo (target) {
  document.querySelector(target).classList.add('animatePseudo')
}
export { getStyles, animatePseudo }

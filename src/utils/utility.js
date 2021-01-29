
function getStyles (el, style) {
  return getComputedStyle(document.querySelector(el))[style]
}

export { getStyles }

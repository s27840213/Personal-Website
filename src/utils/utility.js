
function getStyles (el, style) {
  console.log(el, style)
  return getComputedStyle(document.querySelector(el))[style]
}

export { getStyles }

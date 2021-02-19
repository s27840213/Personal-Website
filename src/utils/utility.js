
function getStyles (el, style) {
  return getComputedStyle(document.querySelector(el))[style]
}

function animatePseudo (target) {
  document.querySelector(target).classList.add('animatePseudo')
}
function mappingUrl (target) {
  switch (target) {
    case 'fb':
      return 'https://www.facebook.com/profile.php?id=100001660030877'
    case 'ig':
      return 'https://www.instagram.com/yoyochen1117/'
    case 'linkedin':
      return 'https://www.linkedin.com/in/yc861117/'
    case 'github':
      return 'https://github.com/s27840213?tab=repositories'
    case 'codepen':
      return 'https://codepen.io/collection/AMdQPg?sort_by=id&cursor=ZD0wJm89MCZwPTEmdj03MDQ4Nzcx'
  }
}
function isMobile () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // true for mobile device
    return true
  } else {
    // false for not mobile device
    return false
  }
}
export { getStyles, animatePseudo, mappingUrl, isMobile }

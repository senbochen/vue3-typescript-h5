const style = (el, prop) => {
  return typeof getComputedStyle !== 'undefined'
    ? getComputedStyle(el, null).getPropertyValue(prop)
    : el.style[prop]
}

const overflow = (el) => {
  return (
    style(el, 'overflow') + style(el, 'overflow-y') + style(el, 'overflow-x')
  )
}

export const scrollParent = (el) => {

  if (!(el instanceof HTMLElement)) {
    return window
  }

  let parent = el as any

  while (parent) {
    if (parent === document.body || parent === document.documentElement) {
      break
    }

    if (!parent.parentNode) {
      break
    }

    if (/(scroll|auto)/.test(overflow(parent))) {
      return parent
    }

    parent = parent.parentNode
  }

  return window
}


export function getScrollTop(el: ObjectType): number {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset

  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0)
}




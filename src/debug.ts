import { pretty } from './utils/pretty.utils'
import { getDocumentHTML } from './utils/render.utils'

export const debug = (selector?: string, options?: any) => {
  let html = getDocumentHTML()

  if (selector) {
    const root = document.createElement('div')
    root.innerHTML = html
    const scoped = root.querySelector(selector)

    if (scoped) {
      html = scoped.outerHTML
    } else {
      console.warn(
        `.debug() couldn't find ${selector}. Logging complete HTML instead.`,
      )
    }
  }
  console.log(pretty(html, options))
}

export const debugByCy = (selector?: string, options?: any) => {
  if (!selector) {
    debug(selector, options)
  } else {
    debug(`[data-cy="${selector}"]`, options)
  }
}

export default debug

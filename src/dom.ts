/**
 * 1.Check if an element is a descendant of another
 * @param child Node
 * @param parent Node
 * @returns boolean
 */
const isDescendant = (child: Node, parent: Node): boolean => parent.contains(child)
/**
 * 2.Initialize the current date but set time to midnight
 * @returns Date
 */
const midnightOfToday = (): Date => new Date(new Date().setHours(0, 0, 0, 0))

/**
 * 3.Check if the touch events are supported
 * @returns boolean
 */
function touchSupported(): boolean {
  return ('ontouchstart' in window || (window as any).DocumentTouch) && document instanceof (window as any).DocumentTouch
}
/**
 * 4.Check if an element is focused
 * @param ele Node
 * @returns boolean
 */
const hasFocus = (ele: Node): boolean => ele === document.activeElement

/**
 * 5.Detect Internet Explorer browser
 * @returns boolean
 */
const isIE = !!(document as any).documentMode
/**
 * 6.Check if user scrolls to the bottom of the page
 * @returns boolean
 */
const isAtBottom = (): boolean => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight
/**
 * 7.Detect macOS browser
 * @returns boolean
 */
const isMacBrowser: boolean = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
/**
 * 8.Get all siblings of an element
 * @param ele Node
 * @returns boolean
 */
const siblings = (ele: Node): Node[] => (ele.parentNode ? [].slice.call(ele.parentNode.children).filter(child => child !== ele) : [])
/**
 * 9.Get the position of an element relative to the document
 * @param ele Node
 * @returns object
 */
const getPosition = (ele: Element) => ({ left: ele.getBoundingClientRect().left + window.scrollX, top: ele.getBoundingClientRect().top + window.scrollY })

/**
 * 10.Go back to the previous page
 * @returns void
 */
const goBack = () => history && history.back()
/**
 * 11.Get the selected text
 * @returns string
 */
const getSelectedText = () => window!.getSelection()!.toString()
/**
 * 12.Hide an element
 * @param ele HTMLElement
 * @returns boolean
 */
const hide = (ele: HTMLElement): boolean => (ele.hidden = true)
/**
 * 13.Insert an element after other one
 * @param ele Element
 * @param anotherEle Element
 * @returns Element|null
 */
const insertAfter = (ele: Element, anotherEle: Element): Element | null => anotherEle.insertAdjacentElement('afterend', ele)
/**
 * 14.Insert an element before other one
 * @param ele Element
 * @param anotherEle Element
 * @returns Element|null
 */
const insertBefore = (ele: Element, anotherEle: Element) => anotherEle.insertAdjacentElement('beforebegin', ele)
/**
 * 15.Insert given HTML after an element
 * @param html string
 * @param ele Element
 * @returns void
 */
const insertHtmlAfter = (html: string, ele: Element): void => ele.insertAdjacentHTML('afterend', html)
/**
 * 16.Insert given HTML before an element
 * @param html string
 * @param ele Element
 * @returns void
 */
const insertHtmlBefore = (html: string, ele: Element): void => ele.insertAdjacentHTML('beforebegin', html)
/**
 * 16.Redirect to another page
 * @param url string
 * @returns string
 */
const goTo = (url: string): string => (location.href = url)
/**
 * 18.Reload the current page
 * @returns string
 */
const reload = () => location.reload()
/**
 * 19.Scroll to top of the page
 * @returns void
 */
const goToTop = (): void => window.scrollTo(0, 0)
/**
 * 20.Toggle an element
 * @param ele HTMLElement
 * @returns boolean
 */
const toggle = (ele: HTMLElement): boolean => (ele.hidden = !ele.hidden)
/**
 * 21.Strip HTML from a given text
 * @param html string
 * @returns string
 */
const stripHtml = (html: string): string => new DOMParser().parseFromString(html, 'text/html').body.textContent || ''
/**
 * 22.Replace an element
 * @param ele Element
 * @param newEle Element
 * @returns Element|null
 */
const replace = (ele: Element, newEle: Element): Element | null => (ele.parentNode ? ele.parentNode.replaceChild(newEle, ele) : null)
export const dom = {
  isDescendant,
  midnightOfToday,
  touchSupported,
  hasFocus,
  isIE,
  isAtBottom,
  isMacBrowser,
  siblings,
  getPosition,
  goBack,
  getSelectedText,
  hide,
  insertAfter,
  insertBefore,
  insertHtmlAfter,
  insertHtmlBefore,
  goTo,
  reload,
  goToTop,
  toggle,
  stripHtml,
  replace,
}

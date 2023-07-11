export function setPageTitle(title?: string) {
  if (title) {
    document.title = `${title} | Bitrock News`
  } else document.title = `Bitrock News`
}

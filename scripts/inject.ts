import './inject.sass'

let selection: string = ''
let updated = false

document.addEventListener('selectionchange', (event) => {
  selection = getSelection().toString().trim()
  updated = true
})

function isWord(str: string): boolean {
  return str.toLowerCase().search(/^[a-z]+$/) === 0
}

document.addEventListener('mouseup', async (event: {clientX: number, clientY: number}) => {
  if (updated && selection && isWord(selection)) {
    selection.trim().toLowerCase()
    window.console.log(chrome)
    await chrome.action.openPopup()
  }
  updated = false
})

let selection: string = ''
let updated = false

document.addEventListener('selectionchange', () => {
  selection = getSelection().toString()
  updated = true
})

document.addEventListener('mouseup', () => {
  if (updated) {
    alert(`${selection} selected`)
  }
  updated = false
})
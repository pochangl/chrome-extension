
document.addEventListener('selectionchange', () => {
  const selection = getSelection().toString();
  window.console.log('selected', selection)
})

document.addEventListener('mouseup', () => {
  window.console.log('up')
})
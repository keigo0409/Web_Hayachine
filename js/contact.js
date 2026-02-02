function showPreview(event) {
  const input = document.querySelector('#input')
  const figureImage = document.querySelector('#figureImage')
  const removeBtn = document.querySelector('.remove-btn')

  const [file] = event.target.files

  if (file) {
    figureImage.src = URL.createObjectURL(file)
    figureImage.style.display = 'block'
    removeBtn.style.display = 'block'
  }
}

function removePreview() {
  const input = document.querySelector('#input')
  const figureImage = document.querySelector('#figureImage')
  const removeBtn = document.querySelector('.remove-btn')

  input.value = ''
  figureImage.src = ''
  figureImage.style.display = 'none'
  removeBtn.style.display = 'none'
}

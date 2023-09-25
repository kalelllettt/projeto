function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag image
  const img = document.querySelector("#profile img")

  // substituir a image
  if (html.classList.contains("light")) {
    //se tiver ligth mode, adicionar a image ligth
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem ligth mode, manter a imagen normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}

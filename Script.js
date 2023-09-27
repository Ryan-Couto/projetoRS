function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //  if (html - classlist - contains("light")) {
  //  html.classList.remove("light")
  //  } else {
  //  html.classList.add("light")
  //  }

  //pegar a tag img

  const img = document.querySelector("#profile img")

  //substituir a imagen

  if (html.classList.contains("light")) {
    // se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./Assets/assets/avatar-light.png")

  } else {
    // se tiver dark mode mantar a imagem normal
    img.setAttribute("src", "./Assets/assets/avatar.png")
  }
  }

  

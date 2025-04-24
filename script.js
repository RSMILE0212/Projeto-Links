function toggleMode() {
  const html = document.documentElement

  // ajustar os botões para que o mesmo ligue e mude o mode
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  //ou eu posso simpleste usar >>>
  // html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //deve substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png") 
    } else {
    //se tiver sem light mode, manter a imagem normal.
    img.setAttribute("src", "./assets/Avatar.png")
  }

  if(html.classList.contains("light")) {
    img.setAttribute("alt", "Mayk Brito sorrindo, usando óculos preto e jaqueta, sem barba e com uma mistura de azul e roxo.")
  } else {
    img.setAttribute(
      "alt",
      "Foto de Mqayk Brito sorrindo, usando óculos e jaqueta, sem barba e com uma mistura de azul e roxo."
    )
  }
}
function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle("light")

  // Atualiza imagem conforme o modo
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    localStorage.setItem("theme", "light") // Salva preferência
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    localStorage.setItem("theme", "dark") // Salva preferência
  }
}

// Aplica o tema salvo ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "light") {
    document.documentElement.classList.add("light")
    document
      .querySelector("#profile img")
      .setAttribute("src", "./assets/avatar-light.png")
  }
})

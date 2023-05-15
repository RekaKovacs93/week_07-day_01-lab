document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form")
  form.addEventListener("submit", handleForm)

  let button = document.createElement("button")
  document.querySelector("body").append(button)
  button.textContent = "Delete"

})


const handleForm = function(event) {
  event.preventDefault()
  let title = event.target.title.value
  let author = event.target.author.value
  let category = event.target.category.value

  let newBook = document.createElement("div")
  let childrenT = document.createElement("h1")
  let childrenA = document.createElement("h4")
  let childrenC = document.createElement("p")
  

  newBook.classList.add("blue")
  newBook.append(childrenT, childrenA, childrenC)
  
  childrenT.textContent = `${title}`
  childrenA.textContent = `${author}`
  childrenC.textContent = `${category}`

  document.querySelector("#reading-list").appendChild(newBook)
  const delAll = document.querySelector("button")
  delAll.addEventListener("click", deleteAll)



  event.target.reset()
}

const deleteAll = function () {
  console.log("Fuck yous")
  document.querySelector("ul").remove()
}

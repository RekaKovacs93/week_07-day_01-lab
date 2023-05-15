document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form")
  form.addEventListener("submit", handleForm)
})


const handleForm = function(event) {
  event.preventDefault()
  let title = event.target.title.value
  let author = event.target.author.value
  let category = event.target.category.value
  let newBook = document.createElement("div")
  let childrenT = document.createElement("p")
  let childrenA = document.createElement("p")
  let childrenC = document.createElement("p")
  newBook.append(childrenT, childrenA, childrenC)
  childrenT.textContent = `${title}`
  childrenA.textContent = `${author}`
  childrenC.textContent = `${category}`

  document.querySelector("#reading-list").appendChild(newBook)

  event.target.reset()
}

var favrtItems = []
var container = document.getElementById("container")
var fvrt = document.getElementById("fvrt")
getItemsFromLocalStorage()

function getItemsFromLocalStorage() {
    var item = localStorage.getItem('fvrtItems')
    console.log('item from local storge=>', item)
    if (item) {
        item = JSON.parse(item)

        favrtItems = item
        fvrt.innerText = `Favourite (${item.length})`
    }
}

for (var i = 0; i < favrtItems.length; i++) {
    var foodObj = favrtItems[i]
    var menu = `<div class='cartCard'">

        <h5 class="card-title">${foodObj.title}</h5>
        <p class="card-text">
        ${foodObj.description}
        </p>
        <button onclick = "remove(this)" class = "cancelBtn">Remove</button>
      </div>

  </div>`

    container.innerHTML += menu
}

function clearFvrtItems() {
    favrtItems = []
    localStorage.clear()
    fvrt.innerText = `Favourite`
    container.innerHTML = ''
}

function remove(cancelBtn){
fvrt.innerText= `Favourite (${--favrtItems.length})`
cancelBtn.parentNode.remove()
  
}

console.log(favrtItems)
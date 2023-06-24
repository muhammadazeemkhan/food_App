const foodItems = [
    {
        foodName: "Burger",
        foodImage: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
        price: 9.99,
        description: "Delicious burger with all the fixings."
    },
    {
        foodName: "Pizza",
        foodImage: "https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=400&q=60",
        price: 12.99,
        description: "Cheesy pizza with your favorite toppings."
    },
    {
        foodName: "Sushi",
        foodImage: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VzaGl8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=400&q=60",
        price: 15.99,
        description: "Fresh and flavorful sushi rolls."
    },
    {
        foodName: "Pasta",
        foodImage: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 10.99,
        description: "Classic pasta dish with your choice of sauce."
    },
    {
        foodName: "Salad",
        foodImage: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbGFkfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
        price: 8.99,
        description: "Fresh and healthy salad with a variety of ingredients."
    },
    {
        foodName: "Biryani",
        foodImage: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyeWFuaXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
        price: 200,
        description: "Fresh and healthy salad with a variety of ingredients."
    },
    // {
    //     foodName: "Raita",
    //     foodImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    //     price: 5,
    //     description: "Fresh and healthy salad with a variety of ingredients."
    // },
];


var container = document.getElementById('foodItemsContainer')
var cart = document.getElementById('cart')
var fvrt = document.getElementById('fvrt') 
var cartItems = []
var fvrtItems = []

getItemsFromLocalStorage()

function getItemsFromLocalStorage() {
    var item = localStorage.getItem('cartItems')
    console.log('item from local storge=>', item)
    if (item) {
        item = JSON.parse(item)
        console.log('item from JSON.parse=>', item)

        cartItems = item
        cart.innerText = `Cart (${item.length})`
    }
}




for (var i = 0; i < foodItems.length; i++) {
    var foodObj = foodItems[i]
    var card = `
    <div data-aos="fade-up" class="col-12 col-md-6 col-lg-4 col-xl-3 my-2 cardContainer">
    <div class="card" style="width: 18rem" >
      <img
        src=${foodObj.foodImage}
        class="card-img-top img-style"
        alt="..."
      />
      <div  class="card-body">
        <h5 class="card-title">${foodObj.foodName}</h5>
        <p class="card-text">
        ${foodObj.description}
        </p>
        <button onclick= "addToCart(this)" class="btn btn-primary my-0">Add to Cart</button>
        <a onclick = "favourite(this)" class = "favrt"> <i class="fa-solid fa-heart favrt"></i></a>
      </div>
    </div>
  </div>`

    container.innerHTML += card
}


function addToCart(btn) {
    console.log(btn.parentNode)

    var title = btn.parentNode.children[0].innerText
    var description = btn.parentNode.children[1].innerText

    var obj = {
        title: title,
        description: description
    }

    cartItems.push(obj)
    cart.innerText = `Cart (${cartItems.length})`

    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}





function favourite(favrt) {
    console.log(favrt.parentNode)

    var fvrttitle = favrt.parentNode.children[0].innerText
    var fvrtdescription = favrt.parentNode.children[1].innerText

    var fvrtobj = {
        title: fvrttitle,
        description: fvrtdescription
    }

    fvrtItems.push(fvrtobj)
    fvrt.innerText = `Favourite (${fvrtItems.length})`
    console.log(fvrtItems)
    localStorage.setItem('fvrtItems', JSON.stringify(fvrtItems))

}

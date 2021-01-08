import Product from "./class/product";

let product = document.getElementById("product-form")
let name = document.getElementById("name")
let price = document.getElementById("price")
let year = document.getElementById("year")



product.addEventListener('submit',function(e){
    e.preventDefault()

    let product = new Product(name.value, price.value, year.value)
    console.log(product)
})


//               CLASES
class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  constructor(form, list) {
    this.form = form;
    this.list = list;
  }

  add(obj) {
    const el = document.createElement("div");

    el.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Name:</strong> ${obj.name}
                    <strong>Price:</strong> ${obj.price}
                    <strong>Year:</strong> ${obj.year}
                    <a href="#" name="delete" class="btn btn-danger">Delete</a>
                </div>
            </div>
        `;
    this.list.appendChild(el);
    this.reset();
    this.info("Agregado Sastifactoriamente", "success", 0.3);
  }

  delete(ele) {
    if (ele.name == "delete") {
      ele.parentElement.parentElement.parentElement.remove();
      this.info("Eliminado Sastifactoriamente", "danger", 0.3);
    }
  }

  info(msg, css, time) {
    const div = document.createElement("div");
    div.className = `alert alert-${css} mt-2`;

    div.appendChild(document.createTextNode(msg));
    // Showing in DOM
    const container = document.querySelector(".container");
    const sub = document.querySelector("#app");

    container.insertBefore(div, app);
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, time * 1000);
  }

  reset() {
    this.form.reset();
  }
}

//               VARIABLES
let productForm = document.getElementById("product-form");
let productList = document.getElementById("product-list");
let tboxName = document.getElementById("name");
let tboxPrice = document.getElementById("price");
let tboxYear = document.getElementById("year");

//               EVENTOS
//  Form
productForm.addEventListener("submit", function (e) {
  const name = tboxName.value
  const price = tboxPrice.value
  const year = tboxYear.value
  const ui = new UI(productForm, productList);
  if(name === "" || price==="" || year === ""){
    return ui.info("Ingrese todos los datos", "warning", 1)
  }
  const InstProduct = new Product(tboxName.value, tboxPrice.value, tboxYear.value);
  ui.add(InstProduct);
  e.preventDefault();
});

// List
productList.addEventListener("click", function (e) {
  const ui = new UI();
  ui.delete(e.target);
});

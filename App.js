function bodyLoad() {
  fetch("https://dummyjson.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let products = data.products;
      console.log(products);
      let maindiv = document.getElementById("image");
      //maindiv.style.display="flex"
      maindiv.style.cssText =
        "text-align: center; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));grid-gap: 20px;";

      for (product of products) {
        let div1 = document.createElement("div");
        div1.style.cssText =
          "width: 200px; height: 450px; background-color: #f0f0f0; border: 1px solid #ccc; color: #333;";

        let imgpath = product.thumbnail;
        let img = document.createElement("img");
        img.src = imgpath;
        img.setAttribute("style", "width: 195px; height: 180px;");

        const name = document.createElement("h3");
        name.textContent = product.title;

        const brand = document.createElement("p");
        brand.textContent = `brand: ${product.brand}`;
        const price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        const rating = document.createElement("p");
        rating.textContent = `Rating: ${product.rating}`;

        div1.appendChild(img);
        div1.appendChild(name);
        div1.appendChild(brand);
        div1.appendChild(price);
        div1.appendChild(rating);

        const btndiv = document.createElement("div");

        btndiv.innerHTML = `<button id="${product.id}" onclick="viewItem('${product.id}')">View Item</button>`;
        const btn = btndiv.querySelector("button");
        btn.style.cssText =
          "background-color:rgb(255, 102, 0);border:none; padding:12px; align-item:center; text-align:center;justify-content:center;width:80%";
        div1.appendChild(btndiv);
        maindiv.appendChild(div1);
      }
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
    });
}

function viewItem(id) {
  window.location.href = "viewProduct.html?id=" + id;
}

async function loadCurrentProduct() {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");
  fetch(`https://dummyjson.com/products/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const element = document.getElementById("product_view_div");
      for (src of data.images) {
        const img = document.createElement("img");
        img.src = src;
        element.appendChild(img);
      }
    });
}

function playAudio(){
  const audio=document.getElementById("audio");
  if(audio){
    audio.play();
  }else{
    alert("Audio not found");
  }

}

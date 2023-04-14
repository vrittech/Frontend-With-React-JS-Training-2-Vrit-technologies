let backendProducts = [];
//using fetch api async/await
const getProducts = async () => {
   //const let - block scoped variable
   const response = await fetch('https://dummyjson.com/products');
   const product = await response.json();
   // console.log(product.limit)
   //object destructuring
   const { limit, products } = product;

   localStorage.setItem("products", JSON.stringify(products))

};


getProducts();

if (localStorage.getItem("products") !== null) {

   //getting item from local storage
   backendProducts = localStorage.getItem("products");
   const products = JSON.parse(backendProducts);

   // console.log(products)
   products.forEach((product) => {
      // console.log(product)
      const div = document.createElement("div");
      div.style = "width: 150px"
      div.className = "card";

      const image = document.createElement("img");
      image.className = 'h-75'
      image.src = product.thumbnail;

      const p = document.createElement("p");
      p.innerText = product.title;

      div.append(image);
      div.append(p);


      //append divs in container to html
      const container = document.getElementById("container");
      container.append(div);

   })

} else {
   console.log('No data found')
}


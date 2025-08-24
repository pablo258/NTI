
function addProduct() {
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;
    var productDescription = document.getElementById("productDescription").value;
    var productsList = document.getElementById("products");

var product = {
    name: productName,
    price: productPrice,
    description: productDescription,
    };

    console.log(product);
    productsList.innerHTML += `
        <h2>Name: ${product.name}</h2>
        <p>Price: $${product.price}</p>
        <p>Description: ${product.description}</p> `;
    alert(`Product ${product.name} and price ${product.price} and description ${product.description} `);
    document.getElementById("productName").value = '';
    document.getElementById("productPrice").value = '';
    document.getElementById("productDescription").value = '';
}
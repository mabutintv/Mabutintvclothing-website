document.addEventListener("DOMContentLoaded", function () {
    const productInfo = {
        imageUrl: "v1.png",
        productName: "Trust the Process version 1",
        price: "₱150.00",
    };

    const cart = [];

    function createProduct(articleClass, imgSrc, imgAlt, productName, price) {
        const productSection = document.getElementById("productList");

        const productArticle = document.createElement("article");
        productArticle.className = articleClass;

        const productImage = document.createElement("img");
        productImage.src = imgSrc;
        productImage.alt = imgAlt;

        const productNameHeading = document.createElement("h2");
        productNameHeading.textContent = productName;

        const productPrice = document.createElement("p");
        productPrice.className = "price";
        productPrice.textContent = price;

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", function () {
            addToCart(productName, price);
        });

        productArticle.appendChild(productImage);
        productArticle.appendChild(productNameHeading);
        productArticle.appendChild(productPrice);
        productArticle.appendChild(addToCartButton);

        productSection.appendChild(productArticle);
    }

    function addToCart(productName, price) {
        const item = { productName, price };
        cart.push(item);
        alert(`${productName} added to cart!`);
        console.log("Cart:", cart);
    }

    createProduct("product", productInfo.imageUrl, "Product Image", productInfo.productName, productInfo.price);
});

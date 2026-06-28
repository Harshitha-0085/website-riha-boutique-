// ==========================================
// RiHa Designer Studio
// Load Products from JSON
// ==========================================

// Get category from URL
const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category");

// Get product container
const container = document.getElementById("products-container");

// Load products
fetch("data/products.json")
    .then(response => response.json())
    .then(products => {

        // Filter products if category is selected
        const filteredProducts = selectedCategory
            ? products.filter(product => product.category === selectedCategory)
            : products;

        // Display products
        filteredProducts.forEach(product => {

            container.innerHTML += `

            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p class="product-id">${product.id}</p>

                    <p class="price">
                        ${product.price ? "₹ " + product.price : "Contact for Price"}
                    </p>

                    <button class="book-btn"
                        onclick="bookProduct('${product.name}','${product.id}')">

                        Book Now

                    </button>

                </div>

            </div>

            `;

        });

    })

    .catch(error => {

        console.error("Error loading products:", error);

    });


// ==========================================
// WhatsApp Booking
// ==========================================

function bookProduct(name, id) {

    const phone = "919876543210";

    const message =
`Hello RiHa Designer Studio,

I'm interested in:

${name}

Product ID: ${id}

Please share the price and availability.

Thank you!`;

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}
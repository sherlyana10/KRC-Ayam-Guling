const products = [

    {
        name: "1/4 Ayam Guling",
        description: "Dada / Paha",
        price: "Rp20.000",
        category: "ayam",
        image: "assets/ayam paha.jpeg"
    },

    {
        name: "1/2 Ayam Guling",
        description: "1 Ekor - 2 Bagian",
        price: "Rp40.000",
        category: "ayam",
        image: "assets/setengah.jpeg"
    },

    {
        name: "1 Ekor Ayam Guling",
        description: "Ayam Utuh",
        price: "Rp79.000",
        category: "ayam",
        image: "assets/ayam utuh.png"
    },

    {
        name: "Nasi",
        description: "Nasi Putih",
        price: "Rp5.000",
        category: "tambahan",
        image: "assets/nasi putih.png"
    },

    {
        name: "Kentang",
        description: "Kentang Goreng",
        price: "Rp5.000",
        category: "tambahan",
        image: "assets/kentang.png"
    },

    {
        name: "Sambal terasi",
        description: "Sambal Pedas",
        price: "Rp5.000",
        category: "sambal",
        image: "assets/terasi.png"
    },

    {
        name: "Sambal Mateng",
        description: "Sambal Matang",
        price: "Rp5.000",
        category: "sambal",
        image: "assets/mateng.png"
    },

    {
        name: "Sambal Matah",
        description: "Sambal Khas Bali",
        price: "Rp5.000",
        category: "sambal",
        image: "assets/matah.png"
    },

    {
        name: "Air Mineral Medium",
        description: "Air Mineral",
        price: "Rp5.000",
        category: "minuman",
        image: "assets/airkecil.png"
    },

    {
        name: "Air Mineral Besar",
        description: "Air Mineral",
        price: "Rp8.000",
        category: "minuman",
        image: "assets/airbesar.png"
    },

    {
        name: "Coca-Cola",
        description: "Coca-Cola Botol",
        price: "Rp6.000",
        category: "minuman",
        image: "assets/cola.png"
    },

    {
        name: "Teh",
        description: "Teh Botol",
        price: "Rp6.000",
        category: "minuman",
        image: "assets/teh.png"
    },

    {
        name: "Nutribrush",
        description: "Minuman",
        price: "Rp6.000",
        category: "minuman",
        image: "assets/nut.png"
    },

    {
        name: "Minute Maid Pulpy",
        description: "Orange",
        price: "Rp6.000",
        category: "minuman",
        image: "assets/jrk.png"
    },

    {
        name: "Sprite Besar",
        description: "Minuman Bersoda",
        price: "Rp12.000",
        category: "minuman",
        image: "assets/sp.png"
    }

];


const menuContainer =
    document.getElementById("menu-container");


function displayProducts(category = "all") {

    menuContainer.innerHTML = "";


    const filteredProducts =
        category === "all"

        ? products

        : products.filter(
            product => product.category === category
        );


    filteredProducts.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                ${
                    product.image

                    ?

                    `<img
                        src="${product.image}"
                        alt="${product.name}"
                    >`

                    :

                    `<div class="product-placeholder">
                        🍗
                    </div>`
                }

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <strong>
                        ${product.price}
                    </strong>

                    <a href="pesan.html">
                        Pesan
                    </a>

                </div>

            </div>
        `;


        menuContainer.appendChild(card);

    });

}


displayProducts();


const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        const category =
            button.dataset.category;


        displayProducts(category);

    });

});
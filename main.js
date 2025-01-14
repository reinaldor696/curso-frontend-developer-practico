const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartNumber = document.querySelector(".shopping-cart-number");
const productDetailCloseIcon =document.querySelector(".product-detail-close");
const menuEmailMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuEmailMobile.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");

    closeProductDetailAside() 
}

function toggleCarAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }
    
    shoppingCartContainer.classList.toggle("inactive");
    
    const isDesktopClosed = desktopMenu.classList.contains("inactive");

    if (!isDesktopClosed) {
        desktopMenu.classList.add("inactive");
    }
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive");

    mobileMenu.classList.add("inactive");

    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "fridge",
    price: 1280,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "tv",
    price: 245,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "fridge",
    price: 1280,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "tv",
    price: 245,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "fridge",
    price: 1280,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "tv",
    price: 245,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        //product= {}
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;

       
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        let number = 0;
        let suma = 0;
        const productInfoFigure = document.createElement("figure");
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
        productImgCard.addEventListener("click", function numberCart(){ 
            for (let i = 0; i < 1; i++) {
                number++;
                suma += number
                shoppingCartNumber.innerHTML = number;
            }        
        });
    
        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}      

renderProducts(productList);
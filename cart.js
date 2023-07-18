let lable = document.getElementById("lable");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [] ;

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    let total = (basket.map((x) => x.item ).reduce((x,y) => x+y,0));
    console.log(basket)
    
    cartIcon.innerHTML = total;

}
calculation();

let genrateCartItem = () =>{
    if(basket.length !==0){

    }
    else{
        
        lable.innerHTML = `
        <h2> Cart is empty </h2>
        <a href="index.html">
            <button class="HomeBtn"> Back to home</button>
        </a>
        `;
        shoppingCart.innerHTML = "";
    }
};
genrateCartItem();
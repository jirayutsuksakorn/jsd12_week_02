const products = 
                 [{id:1, name:"Dell A", price:14999, quantity:10}, {id:2, name:"Dell B", price:15999, quantity:15}, 
                  {id:3, name:"Dell C", price: 16999, quantity:5}
                  ,{id: 4,name: "Dell D", price: 17999, quantity:5}];

const user = {id:1, name: "Jirayut Suksakorn", age: 26, email: "jirayutsuksakorn@gmail.com"};

let cart = [];
function addTocart(productID){
    const product= products.find(p => p.id === productID);
if (product){
    cart.push(product);
    console.log(product.name + " Add To Cart");
}
}

console.log(products);
products.forEach(product => {console.log(product.id + "." + product.name + "." + product.price + ".");
});

console.log(user.name, user.age, user.email);
addTocart(2);
addTocart(4);
/******************** Products creator function ********************/

function Product(id, model, brand, category, mainMaterial, price, stock, quantity) {
    this.id = id;
    this.model = model;
    this.brand = brand;
    this.category = category;
    this.mainMaterial = mainMaterial;
    this.price = Number(price);
    this.stock = Number(stock);
    this.quantity = Number(quantity);
};



/******************** Products (Objects) ********************/

const product1 = new Product ('1', 'sg', 'gibson', 'eléctrica', 'mahogany', 1599, 8, 0);
const product2 = new Product ('2', 'les paul', 'gibson', 'eléctrica', 'mahogany', 2699, 10, 0);
const product3 = new Product ('3', 'stratocaster', 'fender', 'eléctrica', 'maple', 1799, 0, 0);
const product4 = new Product ('4', 'telecaster', 'fender', 'eléctrica', 'maple', 1499, 5, 0);
const product5 = new Product ('5', 'explorer', 'gibson', 'eléctrica', 'mahogany', 1899, 9, 0);
const product6 = new Product ('6', 'jem7vp', 'ibanez', 'eléctrica', 'maple', 2599, 1, 0);



/******************** Arrays ********************/

const cart = [];
const products = [product1, product2, product3, product4, product5, product6];



/******************** Vars ********************/

const chooseProduct = Number(prompt(
    `Elija el producto que desea comprar:
    1 - Guitarra ${product1.category} ${product1.brand} ${product1.model} - u$d ${product1.price}
    2 - Guitarra ${product2.category} ${product2.brand} ${product2.model} - u$d ${product2.price}
    3 - Guitarra ${product3.category} ${product3.brand} ${product3.model} - u$d ${product3.price}
    4 - Guitarra ${product4.category} ${product4.brand} ${product4.model} - u$d ${product4.price}
    5 - Guitarra ${product5.category} ${product5.brand} ${product5.model} - u$d ${product5.price}
    6 - Guitarra ${product6.category} ${product6.brand} ${product6.model} - u$d ${product6.price}
    `
));

const chooseQuantity1 = Number(prompt( 'Coloque la cantidad:' ));

const chooseAnotherProduct = Number(prompt(
    `¿Desea comprar otro producto?:
    1 - Guitarra ${product1.category} ${product1.brand} ${product1.model} - u$d ${product1.price}
    2 - Guitarra ${product2.category} ${product2.brand} ${product2.model} - u$d ${product2.price}
    3 - Guitarra ${product3.category} ${product3.brand} ${product3.model} - u$d ${product3.price}
    4 - Guitarra ${product4.category} ${product4.brand} ${product4.model} - u$d ${product4.price}
    5 - Guitarra ${product5.category} ${product5.brand} ${product5.model} - u$d ${product5.price}
    6 - Guitarra ${product6.category} ${product6.brand} ${product6.model} - u$d ${product6.price}
    `
));

const chooseQuantity2 = Number(prompt( 'Coloque la cantidad:' ));

console.log('En el carrito:')

/******************** Functions ********************/

const addToCart1 = (product1, quantity1) => {
    if( products[chooseProduct - 1].stock >= chooseQuantity1 ) {
        alert( 
            `Felicitaciones! Acabás de agregar al carrito ${chooseQuantity1} guitarra/s ${products[chooseProduct - 1].category}/s ${products[chooseProduct - 1].brand} ${products[chooseProduct - 1].model} por por u$d ${products[chooseProduct - 1].price * chooseQuantity1}` 
            )

        cart.push( products[product1 - 1] )

        products[chooseProduct - 1].quantity = quantity1;
        console.log(
            `|=> Guitarra ${products[chooseProduct - 1].category} ${products[chooseProduct - 1].brand} ${products[chooseProduct - 1].model} X *${products[chooseProduct - 1].quantity} unidades* === u$d ${products[chooseProduct - 1].price * chooseQuantity1}`
        );
    } else {
        alert( 
            `Lo sentimos, no contamos con la cantidad requerida de guitarras ${products[chooseProduct - 1].category}s ${products[chooseProduct - 1].brand} ${products[chooseProduct - 1].model}`
            )
        products[chooseProduct - 1].quantity = '';
    }
};

const addToCart2 = (product2, quantity2) => {
    if( products[chooseAnotherProduct - 1].stock >= chooseQuantity2 ) {
        alert( `Felicitaciones! Acabás de agregar al carrito ${chooseQuantity2} guitarra/s ${products[chooseAnotherProduct - 1].category}/s ${products[chooseAnotherProduct - 1].brand} ${products[chooseAnotherProduct - 1].model} por u$d ${products[chooseAnotherProduct - 1].price * chooseQuantity2}` )
        cart.push(products[product2 - 1])
        products[chooseAnotherProduct - 1].quantity = quantity2;
        console.log(
            `|=> Guitarra ${products[chooseAnotherProduct - 1].category} ${products[chooseAnotherProduct - 1].brand} ${products[chooseAnotherProduct - 1].model} X *${products[chooseAnotherProduct - 1].quantity} unidades* === u$d ${products[chooseAnotherProduct - 1].price * chooseQuantity2}`
        );
    } else {
        alert( `Lo sentimos, no contamos con la cantidad requerida de guitarras ${products[chooseAnotherProduct - 1].category}s ${products[chooseAnotherProduct - 1].brand} ${products[chooseAnotherProduct - 1].model}`)
        products[chooseAnotherProduct - 1].quantity = '';
    }
};



/******************** Functions called ********************/

addToCart1(chooseProduct, chooseQuantity1,);

addToCart2(chooseAnotherProduct, chooseQuantity2);



/******************** Reduce method: total cart price ********************/

const totalCartPrice = cart.reduce( (product1, product2) => (product1 + (product2.price * product2.quantity) ), 0)

console.log( `Total a abonar: u$d ${totalCartPrice}` );
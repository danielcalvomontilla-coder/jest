let products = [];
let id = 0; // ID o contador de elementos

function resetProducts(){
    products = [];
    id = 0;
}


function getProducts(){
    return products;
}

function addProduct(name, price){
    if(!name || !price) throw new Error ("faltan datos");

    if(products.find(item=>item.name === name)){
        throw new Error("El producto ya existía");
    }

    const item = {name, price, id:id++}
    products.push(item);
    //return products;
}

function removeProduct(id){

    const product = products.find(item=>item.id === id);
    if(!product) {
        throw new Error("Error:producto no existe")}

    products = products.filter(item=>item.id !== id);
    return products;
}

function getProduct(id){
    const product = products.find(item=>item.id === id);

    if(!product) {
        throw new Error("Error:producto no existe")}     

}

function updateProduct(id, name, price){
    const product = products.find(item=>item.id === id);
    
    if(!product) throw new Error("Error:producto no existe");
    
    if(name)
        product.name = name;
    if(price)
        product.price = price;
    return product;
}

//Llamadas a las funciones

module.exports = {
    resetProducts,
    getProducts,
    addProduct,
    removeProduct,
    getProduct,
    updateProduct,
}

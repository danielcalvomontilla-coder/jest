const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('adding products', () => {
    //Si alguno de los dos parámetros no está definido, la función lanzará un error

    it("Sucessfully prduct addeed if you pass 2 parameters", () =>{
        expect(() =>addProduct('queso',2)).not.toThrow();
        expect(getProducts()).toEqual([{name:"queso", price:2, id:0}])
     })

    it("should throw an error if you don't send 1st parameter",()=>{        
        expect(() =>addProduct(null,3)).toThrow();
    });

    it("should throw an error if you don't send 2st parameter",()=>{         
        expect(() =>addProduct('queso',null)).toThrow();
    });

    it("should throw an error if you don't any parameter",()=>{       
        expect(() =>addProduct(null,null)).toThrow();
        expect(() =>addProduct()).toThrow();          
    })  
     
    it("Should fail if you add a repeated product", ()=>{
        addProduct("queso", 2)
        expect(()=>addProduct("queso", 2)).toThrow();
     })

});

describe('Remove products', () => {
    //Si alguno de los dos parámetros no está definido, la función lanzará un error

    it("Should remove a product", () =>{

        addProduct('queso',2);
        expect(getProducts()).toEqual([{name:"queso", price:2, id:0}]);

        expect(() =>removeProduct(0)).not.toThrow();
        expect(getProducts()).toEqual([]); 

     })

    it("Shouldn't remove a product that doesn't exist", () =>{        
        
        expect(() =>removeProduct(25)).toThrow(); 
     })
});

describe('Get a single product', () => {
    //Si alguno de los dos parámetros no está definido, la función lanzará un error

    it("Should get a single product", () =>{

        addProduct('queso',2);
        expect(getProducts()).toEqual([{name:"queso", price:2, id:0}]);

        expect(() =>getProduct(0)).not.toThrow();               
     })

    it("Shouldn't get a single product that doesn't exist", () =>{        
        
        expect(() =>getProduct(25)).toThrow(); 
     })
});

describe('Update a single product', () => {
    //Si alguno de los dos parámetros no está definido, la función lanzará un error

    it("Should update a single product", () =>{

        addProduct('queso',2);
        expect(getProducts()).toEqual([{name:"queso", price:2, id:0}]);

        expect(() =>updateProduct(0, "zumo", 22)).not.toThrow();                     
     })

    it("Should update only price", () =>{

        addProduct('queso',2);
        expect(getProducts()).toEqual([{name:"queso", price:2, id:0}]);

        expect(() =>updateProduct(0, null, 22)).not.toThrow();                     
     }) 

    it("Should update only name", () =>{

        addProduct('queso',2);
        expect(getProducts()).toEqual([{name:"queso", price:2, id:0}]);

        expect(() =>updateProduct(0, "tortilla", null)).not.toThrow();                     
     }) 

    it("Shouldn't update a single product that doesn't exist", () =>{        
        
        expect(() =>updateProduct(25)).toThrow(); 
     })
});

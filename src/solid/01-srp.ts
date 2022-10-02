// rompiendo del principio de única responsabilidad
(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    
    }
    


    const productBloc = new ProductBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);


})();


// Aplicando el principio de única responsabilidad
(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductServices {
        getProduct( id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProdut( product: Product){
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {

        notifyClients() {
            console.log('Enviando correo a los clientes');
        }

    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService : ProductServices;
        private mailer : Mailer;

        constructor( productService : ProductServices, mailer : Mailer){
            this.productService = productService;
            this.mailer = mailer;
        }

    
        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProdut( product );
        }
    
        notifyClients() {
            this.mailer.notifyClients()
        }
    
    }
    

    class CartBlog {

        addToCart(productId: number){
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    const productService = new ProductServices();
    const mailer = new Mailer()

    const productBloc = new ProductBloc(productService, mailer);

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();

    const cartBlog = new CartBlog();
    cartBlog.addToCart(10);


})();
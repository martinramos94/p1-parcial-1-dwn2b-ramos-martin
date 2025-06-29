'use strict';

class Producto{

	constructor(nombre,precio,stock){
		this.nombre =	nombre ;
		this.precio =	precio ;
		this.stock =	stock	;
	}
	mostrar (){
	return `Nombre del producto: ${this.nombre}\n Precio: $${this.precio}\n stock: ${this.stock} unidades`
	}
}

let arco = new Producto('arco de tiro', 5, 45);
let skate = new Producto('skate', 10, 28);
let bicicleta = new Producto('bicicleta', 12, 125);
let rollers = new Producto('rollers', 7, 39);

class   CarritoCompras  {
	
	items	= [];
	
	agregarProducto	(producto,cantidad){
		this.items.push({producto,cantidad});	
	};

	removerProducto(producto){		
		this.items = this.items.filter(item => item.producto !== producto );
		console.log('productos',this.items);
	}

	calcularTotal(){
		const subtotal = this.items.reduce((acumulador, cantidad)=>{
			return acumulador + cantidad.cantidad * cantidad.producto.precio;
		},0);
		return subtotal;			
	}	

	mostrarCarrito(){
		this.items.forEach((elementos) => {
			console.log(`producto: ${elementos.producto.nombre}\ncantidad: ${elementos.cantidad}\nSubtotal: $${elementos.producto.precio * elementos.cantidad}`);
		})
		console.log(`Total de la compra $${this.calcularTotal()}`)
	}
}


const carritoCompras = new CarritoCompras();
carritoCompras.agregarProducto(arco,5);
carritoCompras.agregarProducto(rollers,7);
carritoCompras.agregarProducto(bicicleta,2);
console.log('carrito',carritoCompras);

carritoCompras.removerProducto(rollers);

console.log(`total`,carritoCompras.calcularTotal());

carritoCompras.mostrarCarrito();


// console.log(Producto1.mostrar());
// console.log(Producto2.mostrar());
// console.log(Producto3.mostrar());
// console.log(Producto4.mostrar());

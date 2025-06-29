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

let Producto1 = new Producto('arco de tiro', 560000, 45);
let Producto2 = new Producto('skate', 100200, 28);
let Producto3 = new Producto('bicicleta', 1200000, 125);
let Producto4 = new Producto('rollers', 75000, 39);

class   CarritoCompras  {
	
	items	= [];
	
	agregarProducto	(){
		
		const	produYcant	=	{};
		//console.log('producto y cantidad',produYcant);
		produYcant.producto = Producto3.nombre;
		produYcant.cantidad = 2;
		this.items.push(produYcant);	
		const	produYcant2	=	{};
		//console.log('producto y cantidad',produYcant2);
		produYcant2.producto = Producto1.nombre;
		produYcant2.cantidad = 5;
		this.items.push(produYcant2);
		const	produYcant3	=	{};
		//console.log('producto y cantidad',produYcant2);
		produYcant3.producto = Producto4.nombre;
		produYcant3.cantidad = 6;
		this.items.push(produYcant3);
	};

	removerProducto(producto){		
		this.items = this.items.filter(item => item.producto !== producto )
		console.log('productos',this.items)
	}
	
}

const carritoCompras = new CarritoCompras();
console.log('carrito',carritoCompras);
carritoCompras.agregarProducto(Producto1);

carritoCompras.removerProducto('rollers');
//let remover = carritoCompras;


// console.log(Producto1.mostrar());
// console.log(Producto2.mostrar());
// console.log(Producto3.mostrar());
// console.log(Producto4.mostrar());


//CarritoCompras.agregarProducto();
// carritoCompras.removerProducto();
// carritoCompras.calcularTotal();




// function	eliminar(){
	
// 	let opcion;			
// 	opcion = prompt(`que producto desea eliminar?\n${producto1.nombre} o ${producto2.nombre}`);
// 	console.log(opcion);	

// 	for (let cosas of carritoCompras.items){
		
// 		console.log('item: ',cosas);
// 		if(opcion === producto1.nombre){
// 			delete carritoCompras.items[0];
// 		}else if(opcion === producto2.nombre) {
// 			delete carritoCompras.items[1];
// 		}else{
// 			carritoCompras.items;
// 		};
// 	};
// 	console.log (carritoCompras);	
	
// };

// function	total(){

// 		let selecProduto;
// 		let precioFinal;
		
// 		selecProduto = confirm(`desea comprar ${producto1.nombre} y ${producto2.nombre}?`);
// 		if (selecProduto===true){
// 			console.log(selecProduto);
// 			precioFinal=Number((carritoCompras.items[0].precio)+ carritoCompras.items[1].precio);
// 			console.log(precioFinal);
// 		}else {
			
// 			alert('los productos se seliminaran del carrito!!');
// 			delete	carritoCompras.items;
// 			console.log(carritoCompras.items);
// 		}
// };
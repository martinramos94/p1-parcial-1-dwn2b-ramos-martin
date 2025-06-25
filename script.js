'use strict';

class Producto{

	constructor(nombre,precio,stock){
		this.nombre =	nombre ;
		this.precio =	precio ;
		this.stock =	stock	;
	}
	mostrar =	function (){
	return `Nombre del producto: ${this.nombre}\n Precio: $${this.precio}\n Stock: ${this.stock} unidades`
	}
}

let Producto1 = new Producto('arco de tiro', 560000, 45);
let Producto2 = new Producto('skate', 100200, 28);
let Producto3 = new Producto('bicicleta', 1200000, 125);
let Producto4 = new Producto('rollers', 75000, 39);

class   CarritoCompras  {

	constructor(){
		this.items	= [];
		this.agregarProducto	=	function(){
			Number(CarritoCompras.items.push(Producto1));
			Number(CarritoCompras.items.push(Producto2));
		
		};
	}
    // removerProducto ;	eliminar,
    // calcularTotal ;	total
}


console.log(Producto1.mostrar());
console.log(Producto2.mostrar());
console.log(Producto3.mostrar());
console.log(Producto4.mostrar());

console.log(CarritoCompras.items);

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
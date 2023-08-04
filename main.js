class Producto {
    constructor (nombre, precio, cantidad, categoria, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.id = id;
    }
}

let productos = [];
let mouseLogitech = new Producto ("Mouse Logitech Signature M650 ", 26000, 8, "mouse", 1);
let tecladoRazer = new Producto ("Teclado Razer Huntsman Mini", 80000, 5, "teclado", 2);
let monitorSamsung = new Producto ("Monitor Samsung Odyssey CRG5", 155000, 6, "monitor", 3);
let auricularesJbl = new Producto ("Auriculares JBL Tune 510BT", 33000, 4, "auriculares", 4);
let parlantesLogitech = new Producto ("Parlantes Logitech Z407", 90000, 3, "parlantes", 5);



let pushearProductos = (arrayUno, arrayDos) => {
    return arrayDos.push(arrayUno);
};

pushearProductos(mouseLogitech, productos);
pushearProductos(tecladoRazer, productos);
pushearProductos(monitorSamsung, productos);
pushearProductos(auricularesJbl, productos);
pushearProductos(parlantesLogitech, productos);
console.log(productos);

const productosOrdenados = productos.slice().sort(( a, b ) => {
    if ( a.nombre < b.nombre ) {
        return -1;
    } else if ( a.nombre > b.nombre ) {
        return 1;
    } else {
        return 0;
    }
});
console.log(productosOrdenados);



const bienvenida = () => {
    alert("¡Bienvenido a CasaTech!");
    let eleccion = prompt(`Escriba el numero del producto que busca.\n 1. Mouses\n 2. Teclados\n 3. Monitores\n 4. Auriculares\n 5. Parlantes\n 0. Salir`);
    
    while(eleccion != "0") {
    
        if (eleccion === "1") {
            alert("Elijó MOUSES");
            return "mouse";
    
        } else if (eleccion === "2") {
            alert("Elijó TECLADOS");
            return "teclado";
    
        } else if (eleccion === "3") {
            alert("Elijó MONITORES");
            return "monitor";

        } else if (eleccion === "4") {
            alert("Elijó AURICULARES");
            return "auriculares";

        } else if (eleccion === "5"){
            alert("Elijó PARLANTES");
            return "parlantes";

        }  else{
            alert("ERROR. Número inválido");
        }
        
        eleccion = prompt(`Escriba el numero del producto que busca.\n 1. Mouses\n 2. Teclados\n 3. Monitores\n 4. Auriculares\n 5. Parlantes\n 0. Salir`);
    };
};

let eleccionDeProducto = bienvenida();

const busquedaDeProductos = productosOrdenados.slice().filter((producto) => {
    
    let resultado = producto.categoria === eleccionDeProducto;
    //console.log(resultado);
    return resultado;
});

const filtroProductos = busquedaDeProductos.forEach(element => {
    alert(`El / Los productos son:\n${element.nombre}.\nPrecio: $${element.precio}.`);
});

let compra = () => {
    let confirmacion = confirm('¿Desea comprar este producto?\nSi quiere salir, haga click en "Cancelar"');

    if (confirmacion) {
        alert(`¡Usted ha comprado ${busquedaDeProductos[0].nombre}!\nEl monto total es de $${busquedaDeProductos[0].precio}.\nEn breve saldrá hacia tu domicilio.\n ¡GRACIAS POR SU COMPRA!`);
    }else {
        alert(`Si cambias de opinion, puedes volver mas tarde.\n¡Saludos!`);
    };
};

compra();


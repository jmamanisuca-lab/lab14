class Producto {
    #Nombre="";
    #Precio=0;
    #Stock=0;
    
set asigNombre(nombre){
     this.#Nombre=nombre;
}
get Nombre(){
    return this.#Nombre;
}
set numPrecio(precio){
    if(precio>0)
        this.#Precio=precio;
    else
      console.log("Ingrese un monto VALIDO!!!")
}
get Precio(){
    return this.#Precio;
}
set numStock(stock){
    if(stock>0)
     this.#Stock=stock;
    else
        console.log("Ingrese un monto VALIDO¡¡")
}
get Stock(){
    return this.#Stock;
}
vender (cantidad) {
     let result=this.Stock-cantidad;
     console.log("QUEDAN:"+result);
  }
}


const articulo = new Producto;
 let nombre=prompt("Nombre del producto:")
 let producto=prompt("Precio del prodcuto:")
 let stock=prompt("CANTIDAD DE UNIDADES:")
 let cantidad=prompt("CANTIDAD DE ARTICULOS A VENDER:")
 articulo.asigNombre=nombre;
 articulo.numPrecio=producto;
 articulo.numStock=stock;
 console.log("PRODUCTO // PRECIO// STOCK")
 console.log(articulo.Nombre+"//"+articulo.Precio+"//"+articulo.Stock)
 articulo.vender(cantidad)
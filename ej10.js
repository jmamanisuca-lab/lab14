class Figura{
     area (){
        return 0;
     }
     perimetro(){
        return 0;
     }
}
class Cuadrado extends Figura{
    constructor (lado){
        super();
      this.lado=lado;      
    }
   area(){
    return this.lado*this.lado;
   } 
   perimetro(){
    return this.lado+this.lado+this.lado+this.lado;
   }
}
 class Triangulo extends Figura{
    constructor(lado,base,altura){
      super(); 
      this.lado=lado;
      this.base=base;
      this.altura=altura;
    }
    area(){
        return (this.base*this.altura)/2;
    }
    perimetro(){
        return this.lado+this.lado+this.base;
    }    
 }
 const cuadrado =  new Cuadrado(5);
 console.log(cuadrado.area())
 console.log(cuadrado.perimetro())
 const triangulo = new Triangulo(8,10,6);
 console.log(triangulo.area())
 console.log(triangulo.perimetro())
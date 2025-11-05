let x1,y1,x2,y2,distancia,dif;
x1=prompt("INGRESE X1:")
y1=prompt("INGRESE Y1:")
x2=prompt("INGRESE X2:")
y2=prompt("INGRESE Y2:")
distancia=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
console.log("DISTANCIA ENTRE PUNTOS:"+distancia)
console.log("DISTANCIA AL ORIGEN DEL PRIMER PUNTO:"+Math.sqrt(Math.pow(x1,2)+Math.pow(y1,2)))
console.log("DISTANCIA AL ORIGEN DEL SEGUNDO PUNTO:"+Math.sqrt(Math.pow(x2,2)+Math.pow(y2,2)))

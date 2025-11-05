let min,max,alt;
min=prompt("INGRESE EL NUMERO MINIMO:")
max=prompt("INGRESE EL NUMERO MAXIMO:")
alt=Math.random()*100;
if((alt>=min)&&(alt<=max))
    console.log("EL NUMERO GENERADO ES:"+alt)
else
    console.log("EL NUMERO GENERADO ESTA FUERA DEL RANGO:"+alt)
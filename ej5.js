let grados,radianes;
function gradosARadianes(g){
    const rand=g*(Math.PI/180)
    console.log(rand)
    return("RADIANES:"+rand +"\nSENO:"+Math.sin(rand)+"\nCOSENO:"+Math.cos(rand))
}
function radianesAGrados(r){
    const grado=r*(180/Math.PI)
    console.log(grado)
    return("GRADOS:"+grado+"\nSENO:"+Math.sin(grado)+"\nCOSENO:"+Math.cos(grado))
    }
    grados=prompt("INGRESE los GRADOS:")
    radianes=prompt("INGRESE los RADIANES:")
    console.log(gradosARadianes(grados))
    console.log(radianesAGrados(radianes))
    

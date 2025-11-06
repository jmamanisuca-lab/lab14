let NotasArray=[],rand,norm;
let max;
for(let i=0;i<20;i++){
    rand=Math.floor(Math.random()*20)
    NotasArray[i]=rand;}
    for(let i=0;i<NotasArray.length;i++){
        console.log(NotasArray[i])
        max=Math.max(...NotasArray)
    } 
    for(let i=0;i<NotasArray.length;i++){
    norm=NotasArray[i]/max;
    console.log(norm)}
        console.log("MAXIMA NOTA:"+max)
